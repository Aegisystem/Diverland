const mongoose = require('mongoose')

const usuariosSchema = new mongoose.Schema({

    id_usuario: {
        type: Number,
        unique: true,
    },
    cedula: Number,
    apellidos: {
        type: String,
        required: true
    },
    nombres: {
        type: String,
        required: true
    },
    perfil: {
        type: String,
        required: true
    },
    salario: Number
},
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('usuarios', usuariosSchema);