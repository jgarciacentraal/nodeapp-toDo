const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'crear desc'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'jeje'
}

const argv = require('yargs')
 .command('crear', ' crear tarea', {
     descripcion
 })
 .command('actualizar', 'actualizar estado completado de una tarea', {
     descripcion,
     completado 
 })
 .command('borrar', 'borrar una tarea', {
    descripcion
})
 .help()
 .argv

module.exports={
    argv
} 

