
const express = require("express");
const fs = require("fs");
const Contenedor = require("./container.js")
const PORT = process.env.PORT || 8080;
const app = express();
const products = new Contenedor("./products.json")
app.use(express.json());


app.get("/products", async (req, res) => {    
    const data = await products.getAll()
    res.send(data)
})

app.get("/productsRandom/", async (req, res) => {
    const data = await products.getAll()
    const found = data.map(p => p.id);
    const idx1 = (data.length - 1) 
    const max = Math.max(...found);
    const min = Math.min(...found);
    const num = Math.round(Math.random()*(data.length - 1));
    res.send(data[num])
});


app.get("/", (req, res) => {
    res.send("<h1 style='color:green;'> Bienvenido Terrícola </h1>")
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