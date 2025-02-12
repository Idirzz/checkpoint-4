import { useNavigate } from "react-router-dom";
import "./DeleteMonster.component.css";
import type { DeleteMonsterProps } from "./DeleteMonster";

function DeleteMonster({ data }: DeleteMonsterProps) {
  const navigate = useNavigate();
  function handleOnClick() {
    fetch(`${import.meta.env.VITE_API_URL}/monsters/${data.id}`, {
      method: "delete",
    });
  }

  return (
    <button
      onClick={() => {
        handleOnClick();
        navigate("/");
      }}
      type="button"
      className="delete-monster-button"
    >
      Supprimer
    </button>
  );
}
export default DeleteMonster;
