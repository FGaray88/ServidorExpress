const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
    res.send("Pagina de Inicio")
})

app.get("/login", (req, res) => {
    res.send("Pagina de login")
});

app.get("*", (req, res) => {
    res.status(404).send("<h1 style='color:red;'> La pagina que busca no existe </h1>")
});

const connectedServer = app.listen(PORT, () => {
    console.log(`servidor funcionando en puerto ${PORT}`);
});


connectedServer.on("error", (error) => {
    console.log(error.message);
});





