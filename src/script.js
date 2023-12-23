function agregarPantalla(valor){
    document.getElementById('display').value += valor;
}

function borrarTodo(){
    document.getElementById('display').value = '';
}

function calcular(){
    const operacion = document.getElementById('display').value;
    
    try {
        const resultado = eval(operacion);

        if (isNaN(resultado) || !isFinite(resultado)) {
            // Si el resultado no es un número finito, muestra un mensaje de error
            display.value = 'Error';
        } else {
            // Si la operación es válida, muestra el resultado
            display.value = resultado;
        }
    } catch (error) {
        // Si hay un error durante la evaluación, muestra un mensaje de error
        display.value = 'Error';
    }
}