const inquirer = require('inquirer');
const Tareas = require('../models/tareas');
const Tarea = require('../models/tarea');

require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que quieres hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.red} Crear Tarea`
            },
            {
                value: '2',
                name: `${'2.'.red} Lista de Tareas`
            },
            {
                value: '3',
                name: `${'3.'.red} Tareas Completas`
            },
            {
                value: '4',
                name: `${'4.'.red} Tareas Pendientes`
            },
            {
                value: '5',
                name: `${'5.'.red} Completar Tareas(s)`
            },
            {
                value: '6',
                name: `${'6.'.red} Borrar Tarea`
            },
            {
                value: '0',
                name: `${'0.'.red} Salir`
            },
        ]
    }
];

const inquirerMenu = async() => {

        console.clear();

        console.log('========================'.red);
        console.log('   Lista De Tareas '.red);
        console.log(' Selecciona una opcion '.red);
        console.log('=========================\n'.red);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

};

const pausa = async() => {
    
        const question = [
            {
                type: 'input',
                name: 'enter',
                message: `Presione ${ 'ENTER'.red } para continuar`
            }
        ];

        console.log('\n');

        await inquirer.prompt(question);
};

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if ( value.length === 0 ) {
                    return 'Ingrese un valor';
                };
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);

    return desc;

};

const listadoTareasBorrar = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}.`.red;

        return {

            value: tarea.id,

            name: `${ idx } ${ tarea.desc }`

        };

    });

    choices.unshift({

        value: '0',
        name: '0.'.red + 'Cancelar'

    });

    const preguntas = [

        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }

    ]

    const { id } = await inquirer.prompt(preguntas);

    return id;

};

const confirmar = async(message) => {

    const question = [

        {
            type: 'confirm',
            name: 'ok',
            message
        }

    ];

    const { ok } = await inquirer.prompt(question);

    return ok;

};

const mostrarListadoCheckList = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}.`.red;

        return {

            value: tarea.id,

            name: `${ idx } ${ tarea.desc }`,

            checked: ( tarea.completadoEn ) ? true : false

        };

    });

    const pregunta = [

        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }

    ]

    const { ids } = await inquirer.prompt(pregunta);

    return ids;

};

module.exports = {

    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
    
};

