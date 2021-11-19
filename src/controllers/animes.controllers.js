const Anime         =require("./../models/Anime")  // Accedemos al modelo de Schema de modelos

const getAnimes = async(req, res) =>{
    const animes = await Anime.find({})
    res.render("allAnimes", {
        animes //si animes: animes puedo solo usar una "Key-propiedad: valor" anime (esto es de la constante que trae todos los animes de la base de datos)
    })
}

const putAnimes = async(req,res) =>{
    const {id} = req.params   // Destruccturacion de objetos (parametros de la url)
    // console.log(id)             //Postman ayuda a ver si estas funciones sirven
    const { img } = req.body  //(datos del formulario body-parser)

                            // id que estamos buscando
    await Anime.findByIdAndUpdate(id, {img}, {new:true})  // Documentacion de Mongoos - busca un id y lo modifica //que propiedades vas a
    res.redirect("/animes") //Muestrame de nuevo todos los animes cuando ya actulizas
}


module.exports = { getAnimes, putAnimes }