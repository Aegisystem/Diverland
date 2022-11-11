const Venta = require("../modelos/ventas");

const ventaCtrl = {};

ventaCtrl.getVentas = async (req, res, next) => {
  const ventas = await Venta.find();
  res.json(ventas);
};

ventaCtrl.createVenta = async (req, res, next) => {

  const venta = new Venta({
      //TODO Fixear id_venta para que sea automático el número
      id_venta: req.body.id_venta,
      subtotal: req.body.subtotal,
      iva: req.body.iva,
      total: req.body.total,
      metodoPago: req.body.metodoPago,
  });

  await venta.save();
  res.json({ status: "Venta created" });
};

ventaCtrl.getVenta = async (req, res, next) => {
  const { id } = req.params;
  // Revisar el findById porque no estoy seguro si está funcionando bien
  const venta = await Venta.findById(id);
  res.json(venta);
};

ventaCtrl.editVenta = async (req, res, next) => {
  const { id } = req.params;
  await Venta.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Venta Updated" });
};

ventaCtrl.deleteVenta = async (req, res, next) => {
  await Venta.findByIdAndRemove(req.params.id);
  res.json({ status: "Venta Deleted" });
};

module.exports = ventaCtrl;