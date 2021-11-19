// Imports
const express = require('express')
const app = express()

require('dotenv').config()

const path = require('path')

const connectDB =   require("./config/db")

// Middlewares
// Es una funcion que se ejecuta despues de recibir una peticion y antes de dar una respuesta
// Trabajar con archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

// Configuraciones
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

connectDB()


// Routes
// Home
app.get('/', (req, res) => {
    res.render('index')
})


// Server
app.listen(process.env.PORT, () => {
    console.log(`Server on port: http://localhost:${process.env.PORT}`)
})


// const express = require('express')
// const app = express()

// require('dotenv').config()

// const path = require('path')


// //Archivos estaticos
// // app.use(express.static(__dirname + "/public"))
// // console.log(__dirname)
// app.use(express.static(path.join(__dirname, 'public'))) //otra forma como la de arriba para obtener mis archivos estaticos

// //Configuraciones
// app.set("views", path.join(__dirname, "views")) // a donde vamos a acceder en vistas - escribe la ruta directamente
// app.set('view engine', 'hbs')     //motor de vistas que voy a usar en views





// //Rutas
// app.get('/', (req, res) => {
//     res.render('index')
// })





// // Server
// app.listen(process.env.PORT, () => {
//     console.log(`Server on port: http://localhost:${process.env.PORT}`)
// })