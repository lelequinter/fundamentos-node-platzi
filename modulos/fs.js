//! Sin promesas
// const fs = require('fs');

// function leer(ruta, cd) {
//     fs.readFile(ruta, ( err, data ) => {
//         console.log(data.toString());
//     })
// }

// leer(__dirname + '/archivo.txt');

//! Con promesas
const fs = require("fs").promises;

const leer = async (ruta) => {
  const file = await fs.readFile(ruta, { encoding: "utf-8" });
  console.log(file);
};

// leer(__dirname + "/archivo.txt");

const escribir = async (ruta, contenido, cd) => {
    try {
        await fs.writeFile(ruta, contenido)
        console.log('Se ha escrito el archivo correctamente');
    } catch (error) {
        console.log('Error no he podido escribir el archivo', error);
    }
}

const borrar = async (ruta) => {
    try {
        await fs.unlink(ruta);
        console.log('Se ha borrado el archivo correctamente');
    } catch (error) {
        console.log('Error al borrar archivo', error);
    }
}

// escribir(__dirname + '/archivoEscrito.txt', 'Soy un archivo nuevo');
// leer(__dirname + "/archivoEscrito.txt");
borrar(__dirname + "/archivoEscrito.txt");

