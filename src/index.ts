import {Request, Response} from "express"
import express from "express";
import movieRouter from "./routes/moviesRoute.js";
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json())

app.use(movieRouter)


app.get("/health", (_req : Request, res : Response) => {
  res.send("tudo certinho meu chefe");
});

app.listen(4000, () => console.log(`rodando na porta ${4000}`));
