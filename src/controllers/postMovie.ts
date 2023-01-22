import {Request, Response} from "express"
import { getMovieRepository, postMovieRepository, deleteMovieRepository, updateMovieRepository } from "../repositories/movieRepository.js"

export async function postMovie(req: Request, res: Response){
    const filmData : {
        name : string,
        episodes : number,
        done : boolean,
        genre: string
    } = req.body
    try {
        const postFilmData = await postMovieRepository(filmData)
        if(postFilmData){
            return res.sendStatus(201)
        } else{
            return res.sendStatus(500)
        }
    } catch (error) {
        return res.send(error).status(500)
    }
}

export async function getMovies(req: Request, res: Response){
    try {
        const movieData = await getMovieRepository()
        if(movieData){
            return res.send(movieData).status(200)
        } else {
            return res.sendStatus(500)
        }
        
    } catch (error) {
        return res.send(error).status(500)
    }
}

export async function deleteMovie(req: Request, res: Response){
    const id : number = Number(req.params.id)
    try {
        const deleteMovie = await deleteMovieRepository(id)

        if(deleteMovie){
            return res.sendStatus(200)
            
        } else{
            return res.sendStatus(500)
        }

    } catch (error) {
        return res.send(error).status(500)
    }
}

export async function updateMovie(req : Request, res : Response){
    const id : number = Number(req.params.id)
    const newData : {
        name : string,
        episodes : number,
        done : boolean,
        genre : string
    } = req.body

    try {

        const updateMovie = await updateMovieRepository(newData, id)
        
        if(updateMovie){
            return res.sendStatus(201)
        } else{
            return res.sendStatus(500)
        }


    } catch (error) {
        return res.send(error).status(500)
    }

}