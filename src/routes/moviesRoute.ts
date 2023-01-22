import { postMovie } from "@/controllers/postMovie";
import { validateSchema } from "@/middlewares/schemaValidator";
import { movieSchema } from "@/models/moviesModel";
import { Router } from "express";

const router = Router()

router.post("/postMovie", validateSchema(movieSchema), postMovie)