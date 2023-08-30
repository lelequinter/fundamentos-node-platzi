let nombre = process.env.NOMBRE || 'Leyder';
let web = process.env.WEB || 'No existe el dominio';

console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`);