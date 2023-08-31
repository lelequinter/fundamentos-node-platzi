function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla...'); 
            // resolve(nombre);
            reject('Hay un error')
        }, 1000);
    })
}

function adios(nombre){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve(nombre);
        }, 1000);
    });
}

//* ---
console.log('Comienza el proceso...');
hola('Leyder')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso.');
    })
    .catch(error => {
        console.error('Ha ocurrido un error');
        console.error(error);
    })