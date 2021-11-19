const mongoose          =require("mongoose")
const Schema            =mongoose.Schema

//MONGO DB una BD no relacional, son tablas unicas

//Schema
const animeSchema = new Schema({   //Estrictamente tipado
    name: String,
    description: String,
    Rating: String,
    episode: Number,
    categorie: String,
    studio: String,
    img: String,
}, {timestamps: true})





//Modelo
// mi carpeta donde se guardan los datos se llama Anime (nombre de la colleccion y cuando se crea cada dato es anime)
const Anime = mongoose.model("Anime", animeSchema)



//Export
module.exports = Anime