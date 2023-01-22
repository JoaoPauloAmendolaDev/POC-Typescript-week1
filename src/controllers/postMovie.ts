import { movieSchema } from "../models/moviesModel";
import {Request, Response} from "express"

export async function postMovie(req: Request, res: Response){
    const {filmName} = req.body

    try {

        if (!filmName){
            return res.sendStatus(401)
        }

        

    } catch (error) {
        return res.send(error).status(500)
    }
}