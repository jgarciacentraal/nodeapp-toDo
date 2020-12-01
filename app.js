//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion )
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let i of listado) {
            console.log("==================".green);
            console.log(i.descrpcion);
            console.log(i.completado);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descrpcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descrpcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

