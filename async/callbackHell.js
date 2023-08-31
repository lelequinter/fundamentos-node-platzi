function hola(nombre, miCallback){
    setTimeout(() => {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('Bla bla bla bla...'); 
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if( veces > 0 ){
        hablar(function (){
            conversacion(nombre, --veces, callback );
        });
    }else {
        adios(nombre, callback);
    }
}

console.log('Iniciando proceso...');
hola('Carlos', function(nombre) {
    conversacion(nombre, 4, function() {
        console.log('Proceso terminado');
    });
});

//     hablar(function (){
//         hablar(function (){
//             hablar(function (){
//                 adios('Mathias', function(){
//                     console.log('Finalizando proceso...');
//                 });
//             });
//         });
//     });
// });

// hola( 'leyder' ,function(){});
// adios('Mathias', function(){
//     console.log('Finalizando proceso...');
// })