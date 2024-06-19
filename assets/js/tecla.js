// Variable global para almacenar el color actual
let currentColor = '';

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toLowerCase();

// Asociación de colores con teclas
    const colorMap = {
        'a': 'pink',
        's': 'orange',
        'd': 'skyblue',
        'q': 'purple',
        'w': 'gray',
        'e': 'brown'
    };

// Cambiar color del div "key"
    if (colorMap[pressedKey]) {
        currentColor = colorMap[pressedKey];
        document.getElementById('key').style.backgroundColor = currentColor;
    }

// Crear nuevos divs con teclas "q", "w", "e"
    const newDivColors = ['purple', 'gray', 'brown'];
    if (pressedKey === 'q' || pressedKey === 'w' || pressedKey === 'e') {
        const newDiv = document.createElement('div');
        newDiv.id = `newDiv${pressedKey}`;
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.backgroundColor = newDivColors.shift();
        newDiv.style.border = '1px solid black';
        newDiv.style.margin = '10px';
        document.body.appendChild(newDiv);
    }
});