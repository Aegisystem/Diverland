const mongoose = require('mongoose')

const ventasSchema = new mongoose.Schema({

    id_venta: {
        type: Number,
        unique: true,
    },
    subtotal: {
        type: Number,
        required: true
    },
    iva: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    metodoPago: {
        type: String,
        required: true
    },
},
{
    versionKey: false,
    timestamps: true
}
);

module.exports = mongoose.model('ventas', ventasSchema);