// Función original
function example(a, b, c) {
    return a + b + c;
};
  
// Transformado a función de expresión
const exampleExpression = function (a, b, c) {
    return a + b + c;
};
  
// Ejemplo de uso
console.log(example(1, 2, 3)); // Imprime 6
console.log(exampleExpression(4, 5, 6)); // Imprime 15