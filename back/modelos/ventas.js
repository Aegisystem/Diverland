const mongoose = require('mongoose')

const ventasSchema = new mongoose.Schema({

    almuerzo: {
        type: Number,
    },
    snack: {
        type: Number,
    },
    descanso: {
        type: Number,
    },
    metodo: {
        type: String,
    },
},
{
    versionKey: false,
    timestamps: true
}
);

module.exports = mongoose.model('ventas', ventasSchema);