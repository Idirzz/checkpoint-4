import DeleteMonster from "../DeleteMonster/DeleteMonster.component";
import ResTable from "../ResTable/ResTable.component";
import type { MonsterDetailsProps } from "./MonsterDetails";
import "./MonsterDetails.component.css";

function MonsterDetails({ data }: MonsterDetailsProps) {
  return (
    <div className="monster-details-container">
      <h1>{data.name}</h1>
      <img
        alt={data.name}
        src={`${import.meta.env.VITE_API_URL}/images/${data.picture_name}`}
      />
      <p>Famille : {data.family}</p>
      <div className="stats-container">
        <p>{data.health}</p>
        <div className="points-container">
          <p>{data.action_points}</p>
          <p>{data.movement_points}</p>
        </div>
      </div>
      <ResTable data={data.resists} />
      <DeleteMonster data={data} />
    </div>
  );
}
export default MonsterDetails;
