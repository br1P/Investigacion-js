const express = require('express') //importo express
const { obtenerLista,crearInvestigacion,borrarInvestigacion,actualizarInvestigacion } = require('../controllers/entidad.controller') //importo los controladores de la ruta
const router = express.Router()

//aqui definiriamos todas las rutas de mi entidad
router.get('/lista', obtenerLista)
router.post('/crear', crearInvestigacion)
router.patch('/borrar/:id', borrarInvestigacion)
router.put('/actualizar/:id',actualizarInvestigacion)

module.exports = router //exporto el router