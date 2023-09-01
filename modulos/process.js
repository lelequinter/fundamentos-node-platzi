process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
})

process.on('exit', () => {
    console.log('El proceso acabó');
})

process.on('uncaughtException', (err, origin) => {
    console.log('Se nos ha olvidado capturar un error');
    console.error('Error :', err);
})

// process.on('uncaughtRejection')

functionQueNoExiste();
console.log('Esto si el error no se recoge no sale');
