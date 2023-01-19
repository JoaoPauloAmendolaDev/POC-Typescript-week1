import express from "express";
var app = express();
app.get("/health", function (req, res) {
    res.send("tudo certinho meu chefe");
});
app.listen(4000, function () { return console.log("rodando na porta ".concat(4000)); });
