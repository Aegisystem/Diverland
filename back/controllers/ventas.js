const Venta = require("../modelos/ventas");

const ventaCtrl = {};

ventaCtrl.getVentas = async (req, res, next) => {
  const ventas = await Venta.find();
  var totalVentas = ventas.length;
  var almuerzo, descanso, snack, efectivo, tarjeta
  for(let i=0; i<ventas.length; i++) {
    if(ventas[i].almuerzo!=null){
      almuerzo+=ventas[i].almuerzo;
    }
    if(ventas[i].descanso!=null){
      descanso+=ventas[i].descanso;
    }
    if(ventas[i].snack!=null){
      snack+=ventas[i].snack;
    }
    if(ventas[i].metodo!=null){
      if(ventas[i].metodo=="Efectivo") {
        efectivo++;
      }
      else {
        tarjeta++;
      }
    }
  }
  let [vAlmuerzo, vSnack, vDescanso] = [almuerzo*15000, snack*3200, descanso*10000]
  let totalRecaudo = vAlmuerzo + vDescanso + vSnack;
  res.json(ventas);
};

ventaCtrl.getRecaudo = async(req, res,next) => {
  const ventas = await Venta.find();
  let totalVentas = ventas.length;
  let almuerzo, descanso, snack, efectivo, tarjeta

  almuerzo = ventas.reduce((acumulator, current)=> {
    return acumulator + current.almuerzo
  }, 0)

  snack = ventas.reduce((acumulator, current)=> {
    return acumulator + current.snack
  }, 0)

  descanso = ventas.reduce((acumulator, current)=> {
    return acumulator + current.descanso
  }, 0)

  let [vAlmuerzo, vSnack, vDescanso] = [almuerzo*15000, snack*3200, descanso*10000]
  let totalRecaudo = vAlmuerzo + vDescanso + vSnack + totalVentas*35000;
  res.json({
    tickets: `${totalVentas} Tiquetes Vendidos`,
    almuerzos: `${almuerzo} Almuerzos = $${vAlmuerzo}`,
    snacks: `${snack} Snacks = $${vSnack}`,
    descansos: `${descanso} Personas en sala de descanso = $${vDescanso}`,
    recaudoTotal: `Se ha recaudado un total de: $${totalRecaudo}`,
  });
}

ventaCtrl.createVenta = async (req, res, next) => {

  const venta = new Venta({
      //TODO Fixear id_venta para que sea automático el número
      almuerzo: req.body.almuerzo,
      snack: req.body.snack,
      descanso: req.body.descanso,
      metodo: req.body.metodo,
      tarjeta: req.body.tarjeta
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