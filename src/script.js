//funcion que agregar numero u operaciones a la pantalla
function agregarPantalla(valor){
    //sumamos el valor que se desea ingresar a la pantalla que esta definida por el id="display"
    document.getElementById('display').value += valor;
}


//borrar todos los datos que tenga el display
function borrarTodo(){
    document.getElementById('display').value = '';
}


function calcular(){
    //definimos una operacion que se encuntra en los datos del display
    const operacion = document.getElementById('display').value;
    
    try {

        //luego que nuestra opereacion sea evaluada por eval(evalua un texto y lo pasa como opereacion)
        const resultado = eval(operacion);

        //evalula que nuestro
        //La función isNaN se utiliza para determinar si un valor no es un número (NaN).
        //La función isFinite se utiliza para determinar si un valor es un número finito.
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

function borrarUltimo(){
    console.log("Borrar ultimo!");
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
}