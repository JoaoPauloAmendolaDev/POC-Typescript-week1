import {Request, Response} from "express"
import express from "express";

//testes

const nome: string = 'lele'


const app = express();

app.get("/health", (_req : Request, res : Response) => {
  res.send("tudo certinho meu chefe");
});

app.listen(4000, () => console.log(`rodando na porta ${4000}`));
