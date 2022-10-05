//* << Importaciones
const express = require('express')

/** @param Router esta funcion de express utilizada para cargar router */
const router = express.Router()
const userController = require('../controllers/users')
//* Fin de las importaciones >>

//! << Rutas
//? las funciones de las rutas estan en el archivo controllers>>users 
router.get('/all', userController.getUsers)

router.get('/create', userController.createUser)

router.get('/update', userController.updateUser)

router.get('/delete', userController.deleteUser)
//! Fin de Rutas >>

//* Exportar router para usar en otro archivo
module.exports = router