import express from "express";
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import monstersActions from "./modules/monsters/monstersActions";

router.get("/monsters", monstersActions.browse);
router.get("/monsters/:name", monstersActions.read);
router.post("/monsters", monstersActions.add);
router.patch("/monsters/:id", monstersActions.update);
router.delete("/monsters/:id", monstersActions.remove);

/* ************************************************************************* */

export default router;
