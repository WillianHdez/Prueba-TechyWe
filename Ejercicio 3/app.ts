function josefo(n, k) {
  // Lista para almacenar las posiciones de las personas
  const personas = Array.from({ length: n }, (_, i) => i + 1);

  let indiceActual = k - 1;
  do {
    // Eliminar a la persona en la posición actual
    personas.splice(indiceActual, 1);

    // Calcular la posición de la persona a eliminar
    indiceActual = (indiceActual + k-1) % personas.length;
  }while (personas.length > 1)

  // La persona que queda es el ganador
  return personas[0];
}

// Ejemplo de uso
const n = 2048; // Número total de personas
const k = 2; // Saltos entre cada eliminación

const sobreviviente = josefo(n, k);

console.log(`El sobreviviente es la persona número ${sobreviviente}`);
