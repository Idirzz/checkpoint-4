import { useState } from "react";
import "./MonsterList.component.css";
import { useEffect } from "react";
import type { Monster } from "../../types/Monster";
import Loader from "../Loader/Loader.component";
import MonsterCard from "./MonsterCard/MonsterCard.component";

function MonsterList() {
  const [data, setData] = useState<Monster[] | null>(null);

  useEffect(() => {
    async function fetchMonsters() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/monsters`);
      const result = await response.json();
      setData(result);
    }
    fetchMonsters();
  }, []);
  return (
    <>
      {data ? (
        <ul>
          {data.map((el) => (
            <MonsterCard key={el.name} data={el} />
          ))}
        </ul>
      ) : (
        <div className="homepage-content-loader">
          <Loader />
        </div>
      )}
    </>
  );
}
export default MonsterList;
