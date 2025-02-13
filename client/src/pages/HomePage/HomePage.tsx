import "./HomePage.css";
import MonsterList from "../../components/MonsterList/MonsterList.component";

function HomePage() {
  return (
    <main className="homepage-main-container">
      <div className="homepage-content-container">
        <h1>Liste des monstres</h1>
        <MonsterList />
      </div>
    </main>
  );
}
export default HomePage;
