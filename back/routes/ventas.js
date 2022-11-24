const express = require('express')

const router = express.Router()

const controller = require('../controllers/ventas')

router.get("/", controller.getVentas)

router.get("/recaudo", controller.getRecaudo)

router.post("/", controller.createVenta)

router.get("/:id", controller.getVenta)

router.put("/:id", controller.editVenta)

router.delete("/:id", controller.deleteVenta)

module.exports = router