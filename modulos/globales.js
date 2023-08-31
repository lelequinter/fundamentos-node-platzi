// console.log(setInterval);

let i = 0;

let intervalo = setInterval(() => {
    ++i;
    console.log('Hola');
    if( i ===3  ){
        clearInterval(intervalo);
    }
}, 1000);

setImmediate( function (params) {
    console.log('Immediate');
});

console.log('filename', __filename);

globalThis.miVariable = 'elValor'
console.log(miVariable);
console.log(global.miVariable);