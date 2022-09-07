
const express = require("express");
const fs = require("fs");
const container = require("./container.js")
// const products = JSON.parse(fs.readFileSync("./products.json","utf-8"))
const PORT = process.env.PORT || 8080;
const app = express();

const products = new container("./products.json")
app.use(express.json());


app.get("/products", (req, res) => {    
    console.log(products.getAll());
    res.json(products.getAll())

    
})

app.get("/productsRandom/", (req, res) => {
    const found = products.map(p => p.id);
    const max = Math.max(...found);
    const min = Math.min(...found);
    const num = Math.floor(Math.random()*(max - min) + min);
    res.json(products[num])
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





