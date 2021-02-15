const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

// console.log(process.argv);

console.log(argv);


// const [, ,arg3 = 'base=5'] = process.argv;
// const [ ,base = 5] = arg3.split('=');
// console.log(base);

crearArchivo(argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
    .catch(err => console.log(err));