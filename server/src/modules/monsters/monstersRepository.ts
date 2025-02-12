import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";
import type { Monster } from "../../types/Monsters";

class MonsterRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM monsters");

    return rows as Monster[];
  }

  async read(name: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, picture_name, name, family, health, action_points, movement_points, JSON_OBJECT('neu', res_neu,'fo', res_fo,'ine', res_ine, 'cha', res_cha, 'age', res_age) AS resists FROM monsters WHERE name = ?",
      [name],
    );

    return rows[0] as Monster;
  }
}

export default new MonsterRepository();
