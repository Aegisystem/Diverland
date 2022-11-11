const Usuario = require("../modelos/usuarios");

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res, next) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

usuarioCtrl.createUsuario = async (req, res, next) => {

  const usuario = new Usuario({
      //TODO Fixear id_usuario para que sea automático el número
      id_usuario: req.body.id_usuario,
      cedula: req.body.cedula,
      apellidos: req.body.apellidos,
      nombres: req.body.nombres,
      perfil: req.body.perfil,
      salario: req.body.salario
  });

  await usuario.save();
  res.json({ status: "Usuario created" });
};

usuarioCtrl.getUsuario = async (req, res, next) => {
  const { id } = req.params;
  // Revisar el findById porque no estoy seguro si está funcionando bien
  const usuario = await Usuario.findById(id);
  res.json(usuario);
};

usuarioCtrl.editUsuario = async (req, res, next) => {
  const { id } = req.params;
  await Usuario.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Usuario Updated" });
};

usuarioCtrl.deleteUsuario = async (req, res, next) => {
  await Usuario.findByIdAndRemove(req.params.id);
  res.json({ status: "Usuario Deleted" });
};

module.exports = usuarioCtrl;