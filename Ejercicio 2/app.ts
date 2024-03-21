function encontrarCadenaMasLarga(palabras, R) {
  // Variable para almacenar la cadena más larga
  let cadenaMasLarga;

  // Bucle para recorrer las palabras
  for (let i = 0; i < palabras.length - R + 1; i++) {
    // Concatenar las R palabras consecutivas
    let cadenaConcatenada = "";
    for (let j = i; j < i + R; j++) {
      cadenaConcatenada += palabras[j];
    }

    // Si la cadena concatenada es más larga que la actual, actualizarla
    if (cadenaMasLarga === undefined || cadenaConcatenada.length > cadenaMasLarga.length) {
      cadenaMasLarga = cadenaConcatenada;
    }
  }

  // Devolver la cadena más larga
  return cadenaMasLarga;
}

// Ejemplo de uso
const palabras = ["a", "b", "c", "dd"];
const R = 3;
const cadena = encontrarCadenaMasLarga(palabras, R);

console.log(cadena);
