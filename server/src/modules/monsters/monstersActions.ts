import type { RequestHandler } from "express";
import type { MonsterForm } from "../../types/Monsters";

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

const remove: RequestHandler = async (req, res, next) => {
  try {
    const monsterId = req.params.id;
    const monster = await monstersRepository.remove(monsterId);

    if (!monster) {
      res.sendStatus(404);
    } else {
      res.json(monster);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the monster data from the request body
    const newMonster: MonsterForm = req.body as MonsterForm;
    let error = false;
    if (!req.file) {
      error = true;
      res.status(400).json({ error: "Aucune image envoyée" });
    }
    if (
      !error &&
      (Object.keys(newMonster).length !== 10 ||
        Object.values(newMonster).some((v) => v === "" || v === undefined))
    ) {
      error = true;
      res.status(400).json({ error: "Un paramètre est vide ou pas envoyé" });
    }
    if (!error) {
      // Create the monster
      const insertId = await monstersRepository.create(
        req.file?.filename,
        newMonster,
      );
      // Respond with HTTP 201 (Created) and the ID of the newly inserted item
      res.status(201).json({ insertId });
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, remove, add };
