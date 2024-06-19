function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
  }
  
const ele1 = document.getElementById("ele1");
  ele1.addEventListener("click", () => pintar(ele1, 'yellow'));
  
// Ejemplo de uso con otro color
pintar(ele1, 'green'); // Cambia el fondo a verde