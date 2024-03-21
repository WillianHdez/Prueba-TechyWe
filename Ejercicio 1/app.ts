function esTrianguloValido(a, b, c) {
  // Validar que todos los lados sean enteros positivos
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    return false;
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  // Desigualdad triangular: la suma de dos lados cualesquiera debe ser mayor que el tercer lado
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }

  // Si se cumplen todas las condiciones, se puede construir un triángulo
  return true;
}

// Ejemplos de uso
console.log(esTrianguloValido(3, 4, 5)); // true
console.log(esTrianguloValido(0, 1, 2)); // false
console.log(esTrianguloValido(10, 10, 10)); // true (triángulo equilátero)
console.log(esTrianguloValido(1.5, 2.5, 3.5)); // false (los lados deben ser enteros)
