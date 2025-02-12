import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";
import type { Monster } from "../../types/Monsters";

class MonsterRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM monsters");

    return rows as Monster[];
  }
}

export default new MonsterRepository();
