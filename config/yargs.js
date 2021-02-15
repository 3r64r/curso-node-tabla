const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 5,
        describe: 'Cantidad de operaciones'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un número'
        }
        else if(isNaN(argv.h)) {
            throw 'El límite debe ser un número'
        }
        return true
    })
    .argv;

module.exports = argv;