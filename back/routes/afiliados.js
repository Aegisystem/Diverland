const express = require('express')

const router = express.Router()

const controller = require('../controllers/afiliados')

router.get("/", controller.getAfiliados)

router.post("/", controller.createAfiliado)

router.get("/:id", controller.getAfiliado)

router.put("/:id", controller.editAfiliado)

router.delete("/:id", controller.deleteAfiliado)

module.exports = router