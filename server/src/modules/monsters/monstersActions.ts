import type { RequestHandler } from "express";

// Import access to data
import monstersRepository from "./monstersRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const items = await monstersRepository.readAll();

    res.json(items);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const monsterName = req.params.name;
    const monster = await monstersRepository.read(monsterName);

    if (monster == null) {
      res.sendStatus(404);
    } else {
      res.json(monster);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
