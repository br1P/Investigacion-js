const mongoose = require('mongoose')

const investigacionSchema = new mongoose.Schema({
    _id:{
        type:String,
        default: () => {return new mongoose.Types.ObjectId().toString()}
    },
    investigador:{
        type: String,
        require: true
    },
    investigado: {
        type: String,
        require: true
    },
    dateInicio: {
        type: Date,
        require: true
    },
    dateFinal: {
        type: Date,
        require: true
    },
    observacion: [String],
    estado: {
        type: Boolean,
        require: true,
        default:false
    },
    borrado: {
        type:Boolean,
        default: false
    }
})

exports.ModelInvestigacion= mongoose.model('investigacion',investigacionSchema,'investigacion')//nos permite insertar,updatear,deletear,getear