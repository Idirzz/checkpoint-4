import DeleteMonster from "../../components/DeleteMonster/DeleteMonster.component";
import MonsterDetails from "../../components/MonsterDetails/MonsterDetails.component";
import type { Monster } from "../../types/Monster";
import "./MonsterPage.css";
import { useLoaderData } from "react-router-dom";

function MonsterPage() {
  const data = useLoaderData() as Monster;

  return data ? (
    <main className="monster-page-main-container">
      <div className="homepage-content-container">
        <MonsterDetails data={data} />
        <DeleteMonster data={data} />
      </div>
    </main>
  ) : (
    <main>
      <p>Erreur: Impossible de charger les données.</p>
    </main>
  );
}
export default MonsterPage;
