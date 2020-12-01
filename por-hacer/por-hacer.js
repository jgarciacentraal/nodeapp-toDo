const fs = require('fs');

let listaTareas = [];
// guardar data fileSystem
const guardaDB = () => {
    let data = JSON.stringify(listaTareas);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
    });
}
// obtener info de un archivo
const cargarDB = () => {
    try {
        listaTareas = require('../db/data.json');
    } catch (error) {
        listaTareas = [];
    }
}
// funcion crear tarea
const crear = (descrpcion) => {
    cargarDB();
    let tarea = {
        descrpcion,
        completado: false,
    }
    listaTareas.push(tarea);
    guardaDB();
    return tarea;
}
// listado
const getListado = () => {
    try {
        return listaTareas = require('../db/data.json');
    } catch (error) {
        return listaTareas = [];
    }
}
const actualizar = (descrpcion, completado = true) => {
    cargarDB();

    let index = listaTareas.findIndex(i => i.descrpcion === descrpcion);
    if (index >= 0) {
        listaTareas[index].completado = completado
        guardaDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descrpcion) => {
    cargarDB();
    let elementoBorrador = listaTareas.filter(item => item.descrpcion !== descrpcion);
    if (elementoBorrador.length === listaTareas.length ) {
        return false
    } else {
        listaTareas = elementoBorrador
        guardaDB();
        return true
    }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}