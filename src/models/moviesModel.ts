import Joi from "joi"

export const movieSchema = Joi.object({
    "name" : Joi.string().required(),
    "episodes" : Joi.number().required(),
    "done" : Joi.boolean().required(),
    "genre" : Joi.string().required()
})