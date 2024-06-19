// Función original
let suma = function (a, b) {
    return a + b;
  };
  
  // Transformando a arrow function de una línea
  const sumaArrow = (a, b) => a + b; // Se elimina la palabra clave 'function' y los signos de bloque '{}'
  
  // Ejemplo de uso
  console.log(suma(10, 5)); // Imprime 15
  console.log(sumaArrow(20, 30)); // Imprime 50