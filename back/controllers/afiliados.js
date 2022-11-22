const Afiliado = require("../modelos/afiliados");

const afiliadoCtrl = {};

afiliadoCtrl.getAfiliados = async (req, res, next) => {
  const afiliados = await Afiliado.find();
  res.json(afiliados);
};

afiliadoCtrl.createAfiliado = async (req, res, next) => {

  const afiliado = new Afiliado({
      //TODO Fixear id_afiliado para que sea automático el número
      idAfiliado: req.body.idAfiliado,
      cedula: req.body.cedula,
      apellidos: req.body.apellidos,
      nombres: req.body.nombres,
      categoria: req.body.categoria,
      visitas: req.body.visitas
  });

  await afiliado.save();
  res.json({ status: "Afiliado created" });
};

/*
afiliadoCtrl.getAfiliado = async (req, res, next) => {
  const { id } = req.params;
  // Revisar el findById porque no estoy seguro si está funcionando bien
  const afiliado = await Afiliado.findById(id);
  res.json(afiliado);
};
*/
afiliadoCtrl.getAfiliado = async (req, res, next) => {
    const {idAfiliado} = req.params;
    // Revisar el findById porque no estoy seguro si está funcionando bien
    const afiliado = await Afiliado.find({idAfiliado});
    res.json(afiliado);
};

afiliadoCtrl.editAfiliado = async (req, res, next) => {
  const { id } = req.params;
  await Afiliado.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Afiliado Updated" });
};

afiliadoCtrl.deleteAfiliado = async (req, res, next) => {
  await Afiliado.findByIdAndRemove(req.params.id);
  res.json({ status: "Afiliado Deleted" });
};

module.exports = afiliadoCtrl;