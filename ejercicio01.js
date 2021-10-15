const palabras = ['china', 'rusia', 'estados unidos', 'españa', 'francia'];

let random = parseInt(Math.random() * palabras.length);
console.log('esto es el random posicion array: ' + random);
let longitudPalabras = palabras[random].length;
console.log('esto es longitud de palabras: ' + longitudPalabras);

let palabra = palabras[random];
console.log('esto es la palabra: ' + palabra);

const randomizer = (min, max) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (1 + max - min) + min);
};

let valorRandom = randomizer(0, longitudPalabras - 1);
console.log('Esto es el valor random: ' + valorRandom);
let posiciones;
console.log('Esto es la variable posiciones ' + posiciones);
let posicionLetra;
console.log('Esto es la variable posicion letra: ' + posicionLetra);

let dividirPalabra = Math.round(longitudPalabras / 3);

console.log('Esto es lo que es ahora palabra: ' + palabra);

for (let posicion = 0; posicion < dividirPalabra; posicion++) {
  console.log('Esta es la posición actual ' + posicion);
  posiciones = randomizer(0, longitudPalabras - 1);
  posicionLetra = palabra.charAt(posiciones);
  palabra = palabra.replace(posicionLetra, '_');
}

const comprobar = palabras => {
  let palabraUsuario = document.getElementById('text').value;
  palabraUsuario = palabraUsuario.toLowerCase();
  console.log(
    'esta es la palabra introducida por el usuario :' + palabraUsuario
  );
  if (palabraUsuario === palabras[random]) {
    alert('Has acertado ¡Felicidades!');
  } else {
    alert('Has fallado, vuelve a intentarlo,');
  }
};

palabra = palabra.replaceAll('_', '👻');
document.write(palabra);
