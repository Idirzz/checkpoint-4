import type { FormEvent } from "react";
import "./CreationPage.css";
import MonsterForm from "./MonsterForm";

function CreationPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    fetch(`${import.meta.env.VITE_API_URL}/monsters`, {
      method: "POST",
      body: formData,
    });
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
