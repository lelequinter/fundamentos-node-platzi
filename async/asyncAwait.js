async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla...'); 
            resolve();
            // reject('Hay un error')
        }, 1000);
    })
}

async function adios(nombre){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve(nombre);
        }, 1000);
    });
}

//* ---
async function main(){
    const nombre = await hola('leyder');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

console.log('Empezamos el proceso');
main();
console.log('Termina el proceso');