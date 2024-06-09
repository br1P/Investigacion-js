

const {ModelInvestigacion} = require('../models/investigacion.model')
//funcion controladora que devuelve la lista de entidades
exports.obtenerLista = async (req, res) => {
    try {
        const investigacion = await ModelInvestigacion.find({borrado:false})

       // console.log("investigacion", investigacion)
        return res.status(200).send({ success: true, data: investigacion })
    } catch (error) {
        console.log("[obtenerLista] Error fatal: ", error)
        return res.status(500).send({ success: false, message: 'Error en el servidor' })
    }
}



exports.crearInvestigacion = async (request, response) => {
    try {

        const { investigador, investigado, dateInicio, dateFinal, observacion, estado } = request.body;

        if (!investigador || !investigado || !dateInicio || !dateFinal || !observacion ) {
            return response.status(400).send({ success: false, message: 'Faltan datos' })
        }


        const nuevaInvestigacion = new ModelInvestigacion({

            investigador: investigador,
            investigado: investigado,
            dateInicio: dateInicio,
            dateFinal: dateFinal,
            observacion: observacion,
            estado: false,
            borrado: false

        })

        await nuevaInvestigacion.save()

        return response.status(200).send({ success: true, data: "Investigacion Creada!" })
    } catch (error) {
        console.log("error server: ", error)
        return response.status(500).send({ success: false, message: 'Error en el servidor' })
    }
}


exports.borrarInvestigacion = async (request, response) => {
    try {
        
        const { id } = request.params
        const query = { _id: id }
        const update = { borrado: true }
        
        await ModelInvestigacion.updateOne( query, update )

        return response.status(200).send( {success: true, message: 'he borrado la investigacion'})
    } catch {
        return response.status(500).send({ success: false, message: 'Error en el servidor' })
    }

}

exports.actualizarInvestigacion =async (request, response) => {
    try {
        const { id } = request.params
        const { investigador, investigado, dateInicio, dateFinal, observacion, estado } = request.body;

        const query = { _id: id }
        const update = { }

        if(investigador) update.investigador = investigador
        if(investigado) update.investigado = investigado
        if(dateInicio) update.dateInicio = dateInicio
        if(dateFinal) update.dateFinal =dateFinal
        if(observacion) update.observacion =observacion
        if(estado || estado == false) update.estado =estado

        await ModelInvestigacion.updateOne(query,update)
       
        return response.status(200).send({success: true, message: 'he actualizado la investigacion'})
    } catch {
        console.log("[actualizarInvestigacion] Fatal error: ", error)
        return response.status(500).send({ success: false, message: 'Error en el servidor' })
    }
}