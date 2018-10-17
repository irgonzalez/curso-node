const {crearArchivo} = require('./multiplicar/multiplicar');
const {base, hasta, comando} = require('./config/yargs');

var colors = require('colors/safe');

crearArchivo(base, hasta, comando)
.then(archivo => console.log(colors.green(archivo) ))
.catch(err => console.log(colors.red(err) ));

