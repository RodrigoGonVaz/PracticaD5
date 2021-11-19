const express           =require("express")
const router = express.Router() //Importacion de mi router que necesita express

const animeController   =require("./../controllers/animes.controllers")
// console.log(animeController) // <---- { getAnimes: [AsyncFunction: getAnimes] }
//Rutas
//Obtener los animes o mostrar en pantalla
//Raiz de anime ya que en index.js ya se habia entrado con router
router.get("/", animeController.getAnimes)

// router.post("/crate",)
router.put("/:id/update", animeController.putAnimes) //pasar id atraves de la URL - Query params

// router.put("/anime/delete",)


module.exports = router //exportacion de modelo