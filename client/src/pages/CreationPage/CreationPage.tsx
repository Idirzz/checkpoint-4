import type { FormEvent } from "react";
import "./CreationPage.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MonsterForm from "./MonsterForm";

function CreationPage() {
  const navigate = useNavigate();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/monsters`, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      toast.success("Monstre créé avec succès");
      navigate("/");
    } else {
      const err = await response.json();
      const errorMessage = err.error;
      if (errorMessage === "Aucune image envoyée")
        toast.error(
          "T'aurais pas oublié de lui mettre une image au monstre la?",
        );
      else if (errorMessage === "Un paramètre est vide ou pas envoyé")
        toast.error("T'aurais pas oublié un champ?");
    }
  }
  return (
    <main className="creation-page-main-container">
      <MonsterForm
        onSubmit={handleSubmit}
        title={"Créer un nouveau monstre"}
        actionName="Créer"
      />
    </main>
  );
}
export default CreationPage;
