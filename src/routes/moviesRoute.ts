import { postMovie } from "../controllers/postMovie.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { movieSchema } from "../models/moviesModel.js";
import { Router } from "express";

const router = Router()

router.post("/postMovie", validateSchema(movieSchema), postMovie)

export default router