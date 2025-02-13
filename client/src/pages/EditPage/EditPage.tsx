import type { FormEvent } from "react";
import type { Monster } from "../../types/Monster";
import MonsterForm from "../CreationPage/MonsterForm";
import "./EditPage.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditPage() {
  const data = useLoaderData() as Monster;
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const newData = {
      name: formData.get("name"),
      family: formData.get("family"),
      health: formData.get("health"),
      action_points: formData.get("actionPoints"),
      movement_points: formData.get("movementPoints"),
      res_neu: formData.get("resNeu"),
      res_fo: formData.get("resFo"),
      res_ine: formData.get("resIne"),
      res_cha: formData.get("resCha"),
      res_age: formData.get("resAge"),
    };
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/monsters/${data.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      },
    );
    if (response.ok) {
      toast.success(`Monstre ${newData.name} modifié`);
      navigate("/");
    } else {
      const result = await response.json();
      toast.error(result.message);
    }
  }

  return data ? (
    <main className="monster-page-main-container">
      <MonsterForm
        noImg={true}
        defaultValues={data}
        onSubmit={handleSubmit}
        title={`Modifier ${data.name}`}
        actionName="Modifier"
      />
    </main>
  ) : (
    <main>
      <p>Erreur: Impossible de charger les données.</p>
    </main>
  );
}
export default EditPage;
