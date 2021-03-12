
require('colors');


const mostrarMenu = () => {

    return new Promise( resolve => {

        console.clear();
        console.log('***************************************'.rainbow);
        console.log('           Selecione una opcion'.cyan);
        console.log('*************************************** \n'.rainbow);
    
        console.log(` ${'1.'.green} Crear tarea`);
        console.log(` ${'2.'.green} Listar tarea`);
        console.log(` ${'3.'.green} Listar tareas finalizadas`);
        console.log(` ${'4.'.green} Listar tareas pendientes`);
        console.log(` ${'5.'.green} Completar tareas`);
        console.log(` ${'6.'.green} Eliminar tareas`);
        console.log(` ${'0.'.green} Salir \n`);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question('Seleccione una opcion: ', (opt) => {
            readLine.close();
            resolve(opt);
        });

    });

}

const pausa = () => {

    return new Promise((resolve) => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar \n`, (opt) => {
            readLine.close();
            resolve();
        });
    
    });
   
}

module.exports = {

    mostrarMenu,
    pausa

}