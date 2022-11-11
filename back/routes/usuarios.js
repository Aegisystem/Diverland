const express = require('express')

const router = express.Router()

const controller = require('../controllers/usuarios')

router.get("/", controller.getUsuarios)

router.post("/", controller.createUsuario)

router.get("/:id", controller.getUsuario)

router.put("/:id", controller.editUsuario)

router.delete("/:id", controller.deleteUsuario)

module.exports = router