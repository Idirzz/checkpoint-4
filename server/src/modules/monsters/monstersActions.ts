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

export default { browse };
