import { postMovie, getMovies, deleteMovie } from "../controllers/postMovie.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { movieSchema } from "../models/moviesModel.js";
import { Router } from "express";

const router = Router()

router.post("/postMovie", validateSchema(movieSchema), postMovie)
router.get("/movieList", getMovies)
router.delete("/movieDelete/:id", deleteMovie)

export default router