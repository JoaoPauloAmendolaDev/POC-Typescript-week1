"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get("/health", function (req, res) {
    res.send("tudo certinho meu chefe");
});
app.listen(4000, function () { return console.log("rodando na porta ".concat(4000)); });
