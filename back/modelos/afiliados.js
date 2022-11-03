const mongoose = require('mongoose')

const afiliadosSchema = new mongoose.Schema({

    id_afiliado: {
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
    categoria: {
        type: String,
        required: true
    },
    visitas: Number
},
{
    versionKey: false,
    timestamps: true
}
);

module.exports = mongoose.model('afiliados', afiliadosSchema);