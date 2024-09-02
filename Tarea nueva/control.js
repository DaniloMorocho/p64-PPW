const storage = require('./storage');

function insertar_usuario(dato) {
    return new Promise((resolve, reject) => {
        if (!dato) {
            reject('No existen datos');
        } else {
            resolve(storage.insertar(dato));
        }
    });
}

function obtener_usuario(dato) {
    return new Promise((resolve, reject) => {
        if (!dato) {
            reject('No existen datos');
        } else {
            resolve(storage.obtener(dato));
        }
    });
}

function actualizar_usuario(dato) {
    return new Promise((resolve, reject) => {
        if (!dato || !dato.nombre) {
            reject('Datos insuficientes para actualizar mi estimado');
        } else {
            resolve(storage.actualizar(dato));
        }
    });
}

function eliminar_usuario(dato) {
    return new Promise((resolve, reject) => {
        if (!dato || !dato.nombre) {
            reject('Datos insuficientes para eliminar mi estimado');
        } else {
            resolve(storage.eliminar(dato.nombre));
        }
    });
}

module.exports = {
    insertar_usuario,
    obtener_usuario,
    actualizar_usuario,
    eliminar_usuario
};
