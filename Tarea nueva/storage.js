const Ciudad = require('./modelo');

async function insertar(dato) {
    try {
        const nuevaCiudad = new Ciudad(dato);
        const resultado = await nuevaCiudad.save();
        return resultado;
    } catch (error) {
        throw new Error(`Error al insertar: ${error.message}`);
    }
}

async function obtener(dato) {
    try {
        const ciudad = await Ciudad.findOne({ nombre: dato.nombre }).populate('pais').exec();
        if (!ciudad) {
            throw new Error('Ciudad desconocida ');
        }
        return ciudad;
    } catch (error) {
        throw new Error(`Error al obtener: ${error.message}`);
    }
}

async function actualizar(dato) {
    try {
        const ciudadActualizada = await Ciudad.findOneAndUpdate(
            { nombre: dato.nombre },
            {
                $set: {
                    pais: dato.pais,
                    nombre: dato.nombre,
                    fecha_actualizacion: new Date()
                }
            },
            { new: true }
        ).exec();
        if (!ciudadActualizada) {
            throw new Error('Ciudad desconocida no se puede actualizar');
        }
        return ciudadActualizada;
    } catch (error) {
        throw new Error(`Error al actualizar ciudad: ${error.message}`);
    }
}

// Eliminar un documento de la colección Ciudad por su nombre
async function eliminar(nombre) {
    try {
        const ciudadEliminada = await Ciudad.findOneAndDelete({ nombre }).exec();
        if (!ciudadEliminada) {
            throw new Error('Ciudad no encontrada para eliminar');
        }
        return ciudadEliminada;
    } catch (error) {
        throw new Error(`Error al eliminar ciudad: ${error.message}`);
    }
}

module.exports = {
    insertar,
    obtener,
    actualizar,
    eliminar
};
