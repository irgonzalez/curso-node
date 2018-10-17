const comandos = {base:{
    demand: true,
    alias: 'b'
},
hasta: {
    alias: 'h',
    default: 20
}};

const argv = require('yargs')
.command('listar', 'Imprime en consola la tabla de multiplicar',
    comandos
)
.command('crear', 'Crea el archivo de la tabla de multiplicar',{
    comandos
}).argv

let comando = argv._[0];

module.exports = {
    base: argv.base,
    hasta: argv.hasta,
    comando: comando
}