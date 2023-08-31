const  { exec, spawn } = require('child_process');
const { stdout, stderr } = require('process');

// exec('node modulos/errores.js', (err, stdout, stderr) => {
//     if(err){
//         console.log('err :', err);
//         return false;
//     }

//     console.log(stdout);
// })

let proceso = spawn('dir');

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log(dato.toString());
})

proceso.on('exit', function() {
    console.log('El proceso terminó');
    console.log('Está muerto?');
    console.log(proceso.killed);
})