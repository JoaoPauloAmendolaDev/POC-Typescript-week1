import {Request, Response} from "express"
import { postMovieRepository } from "../repositories/movieRepository.js"

export async function postMovie(req: Request, res: Response){
    const filmData : {
        name : string,
        episodes : number,
        done : boolean,
        genre: string
    } = req.body

    
    try {

        const postFilmData = await postMovieRepository(filmData)

        res.sendStatus(200)

    } catch (error) {
        return res.send(error).status(500)
    }
}