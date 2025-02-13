import { useNavigate } from "react-router-dom";
import "./EditMonster.component.css";
import type { EditMonsterProps } from "./EditMonster";

function EditMonster({ data }: EditMonsterProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/monstre/edit/${data.name}`)}
      type="button"
      className="edit-monster-button"
    >
      Modifier
    </button>
  );
}
export default EditMonster;
