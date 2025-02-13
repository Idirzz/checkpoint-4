import { Link } from "react-router-dom";
import "./CreationCard.component.css";

function CreationCard() {
  return (
    <li className="monstercard-container">
      <Link to="/monstre/creation">
        <img
          className="create-monster-logo"
          alt="signe plus"
          src="/public/images/plus.svg"
        />
        <p>Nouveau monstre</p>
      </Link>
    </li>
  );
}
export default CreationCard;
