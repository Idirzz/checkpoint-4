import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { Monster, MonsterForm } from "../../types/Monsters";

class MonsterRepository {
  async create(picture_name: string | undefined, insertedValues: MonsterForm) {
    const query = `
    INSERT INTO monsters 
    (name, picture_name, family, health, action_points, movement_points, res_neu, res_fo, res_ine, res_cha, res_age) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
    const values = [
      insertedValues.name,
      picture_name,
      insertedValues.family,
      insertedValues.health,
      insertedValues.actionPoints,
      insertedValues.movementPoints,
      insertedValues.resNeu,
      insertedValues.resFo,
      insertedValues.resIne,
      insertedValues.resCha,
      insertedValues.resAge,
    ];

    const [result] = await databaseClient.query<Result>(query, values);

    return result.insertId;
  }
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

  async remove(id: string) {
    const [Result] = await databaseClient.query<Result>(
      "DELETE FROM monsters WHERE id = ?",
      [id],
    );

    return Result.affectedRows;
  }
}

export default new MonsterRepository();
