// Imports
const express = require('express')
const app = express()

require('dotenv').config()

const path = require('path')

const connectDB =   require("./config/db")

const bodyParser =  require("body-parser")

// Middlewares
//Archivos estaticos
// app.use(express.static(__dirname + "/public"))
// console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public'))) //otra forma como la de arriba para obtener mis archivos estaticos
app.use(bodyParser.urlencoded({extended:true})) //ayuda a leer los datos del cliente

//Configuraciones
app.set("views", path.join(__dirname, "views")) // a donde vamos a acceder en vistas - escribe la ruta directamente
app.set('view engine', 'hbs')     //motor de vistas que voy a usar en views

connectDB()


// Routes
// Home
app.get('/', (req, res) => {
    res.render('index')
})

//carpeta de rutas y controles:
//Ruta Animes
app.use("/animes", require("./routes/animes.router")) // Metete a mi carpeta anime.router




// Server
app.listen(process.env.PORT, () => {
    console.log(`Server on port: http://localhost:${process.env.PORT}`)
})

