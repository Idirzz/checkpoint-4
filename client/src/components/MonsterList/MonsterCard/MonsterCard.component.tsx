import { Link } from "react-router-dom";
import type { Monster } from "../../../types/Monster";
import "./MonsterCard.component.css";

function MonsterCard({ data }: { data: Monster }) {
  return (
    <li className="monstercard-container">
      <Link to={`/monstre/${data.name}`}>
        <img
          alt={`${data.name}`}
          src={`${import.meta.env.VITE_API_URL}/images/${data.picture_name}`}
        />
        <p>{data.name}</p>
      </Link>
    </li>
  );
}
export default MonsterCard;
