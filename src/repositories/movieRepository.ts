import { QueryResult } from "pg";
import connection from "../database/database.js";

export async function postMovieRepository(filmData: { name: string; episodes: number; done: boolean; genre: string; }){

    const {name, done, episodes, genre } = filmData
    try {

        await connection.query(
            `INSERT INTO movies (name, episodes, done, genre) VALUES ($1, $2, $3, $4);`,
            [name, episodes, done, genre]
        )
        return true
    } catch (error) {
        console.log('deu erro ao postar o filme', error)
        return false
    }
}

export async function getMovieRepository(){
    try {
        const data: QueryResult = await connection.query(
            `SELECT * FROM movies;`
        )
        return data.rows
    } catch (error) {
        return false
    }
}

export async function deleteMovieRepository(id : number){
    try {
        
        await connection.query(
            `DELETE FROM movies WHERE id = $1`,
            [id]
        )
        return true

    } catch (error) {
        console.log(error)
        return false
    }
}