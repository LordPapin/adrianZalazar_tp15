const peliculas = require('./peliculas');


for (let i = 0; i < peliculas.length; i++) {
  const pelicula = peliculas[i];
  console.log(`Título: ${pelicula.title}`);
  console.log(`Calificación: ${pelicula.rating}/10`);
  console.log(`Premios: ${pelicula.awards}`);
  console.log(`Duración: ${pelicula.length} minutos`);
  console.log(`Precio: $${pelicula.price}`);
  console.log(`Género: ${pelicula.genre}`);
  console.log('---------------------------');
}


const fs = require('fs');


const rutaArchivo = './mensaje.txt';


fs.readFile(rutaArchivo, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Contenido del archivo mensaje.txt:');
  console.log(data);
});
