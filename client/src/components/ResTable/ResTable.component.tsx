import type { Monster } from "../../types/Monster";
import "./ResTable.component.css";

function ResTable({ data }: { data: Monster["resists"] }) {
  return (
    <ul className="res-table-container">
      <li>
        <img src="/public/images/re_neu.png" alt="résistances neutre" />
        <p>{data.neu}</p>
      </li>
      <li>
        <img src="/public/images/re_fo.png" alt="résistances force" />
        <p>{data.fo}</p>
      </li>
      <li>
        <img src="/public/images/re_ine.png" alt="résistances intelligence" />
        <p>{data.ine}</p>
      </li>
      <li>
        <img src="/public/images/re_cha.png" alt="résistances chance" />
        <p>{data.cha}</p>
      </li>
      <li>
        <img src="/public/images/re_age.png" alt="résistances agile" />
        <p>{data.age}</p>
      </li>
    </ul>
  );
}
export default ResTable;
