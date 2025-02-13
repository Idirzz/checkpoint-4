import type { LoaderFunctionArgs } from "react-router-dom";

export async function monsterLoader({ params }: LoaderFunctionArgs) {
  const { name } = params;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/monsters/${name}`,
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    throw new Error("Échec du chargement des données");
  }
}
