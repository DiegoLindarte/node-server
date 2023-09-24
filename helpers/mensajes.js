/* const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {

        console.clear();

        console.log('========================'.red);
        console.log('   Lista De Tareas '.red);
        console.log(' Selecciona una opcion '.red);
        console.log('=========================\n'.red);

        console.log(`${ '1.'.red } Crear Tarea`);
        console.log(`${ '2.'.red } Lista de Tareas`);
        console.log(`${ '3.'.red } Tareas Completadas`);
        console.log(`${ '4.'.red } Tareas Pendientes`);
        console.log(`${ '5.'.red } Completar Tarea(s)`);
        console.log(`${ '6.'.red } Borrar Tarea`);
        console.log(`${ '0.'.red } Salir\n`);

        const readline = require('readline').createInterface({

            input: process.stdin,
            output: process.stdout
        
        });

        readline.question('Seleccione una opcion: ', (opt) => {
        
            readline.close();
            resolve(opt);

        });
        
    });

    

}

const pausa = () => {

    return new Promise( resolve => {

        const readline = require('readline').createInterface({

        input: process.stdin,
        output: process.stdout
        
        });

        readline.question(`\nPresione ${ 'Enter'.red } para continuar\n`, (opt) => {

            console.log(opt);
        
            readline.close();
            resolve();

        });

    });

};

module.exports = {

    mostrarMenu,
    pausa

} */

