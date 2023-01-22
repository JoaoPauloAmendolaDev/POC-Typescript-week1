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