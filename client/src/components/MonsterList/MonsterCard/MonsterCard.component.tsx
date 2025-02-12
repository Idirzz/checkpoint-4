import { Link } from "react-router-dom";
import type { Monster } from "../../../types/Monster";
import "./MonsterCard.component.css";

function MonsterCard({ data }: { data: Monster }) {
  return (
    <Link to={`/monstre/${data.name}`}>
      <li className="monstercard-container">
        <img
          alt={`${data.name}`}
          src={`${import.meta.env.VITE_API_URL}/images/${data.picture_name}`}
        />
        <p>{data.name}</p>
      </li>
    </Link>
  );
}
export default MonsterCard;
