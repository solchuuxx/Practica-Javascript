//Ejercicios Funciones
//1
function esMayorEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
console.log(esMayorEdad(20));
console.log(esMayorEdad(16));

//2
  function calcularAreaRectangulo(base, altura) {
    var area = base * altura;
    return area;
  }
console.log(calcularAreaRectangulo(5, 10));
console.log(calcularAreaRectangulo(3, 7));

//3 
  function generarNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio;
  }
console.log(generarNumeroAleatorio());

//4
  function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, '');
    return cadena === cadena.split('').reverse().join('');
}
console.log(esPalindromo("radar"));
console.log(esPalindromo("murcielago")); 

//Ejercicios Arreglos
//1
function obtenerSuma(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
}
console.log(obtenerSuma([1, 2, 3, 4, 5]));

//2
function obtenerPares(arreglo) {
    var pares = [];
    for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        pares.push(arreglo[i]);
      }
    }
    return pares;
}
console.log(obtenerPares([1, 2, 3, 4, 5, 6]));

//3
function obtenerPromedioPonderado(notas, pesos) {
    var sumaProductos = 0;
    var sumaPesos = 0;
  
    for (var i = 0; i < notas.length; i++) {
      sumaProductos += notas[i] * pesos[i];
      sumaPesos += pesos[i];
    }
  
    if (sumaPesos === 0) {
      throw new Error("La suma de los pesos no puede ser cero.");
    }
  
    return sumaProductos / sumaPesos;
}
var notas = [70, 80, 90];
var pesos = [0.4, 0.4, 0.2];
console.log(obtenerPromedioPonderado(notas, pesos));

//4
function obtenerMaximo(arreglo) {
    var maximo = arreglo[0];
  
    for (var i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
        maximo = arreglo[i];
      }
    }
  
    return maximo;
}
console.log(obtenerMaximo([3, 5, 2, 9, 1]));  

//Objetos
//1
var producto = {
  nombre: "Tomate",
  precio: 20,
  cantidad: 3
};

function calcularTotal(producto) {
  return producto.precio * producto.cantidad;
}

console.log(calcularTotal(producto));

//2
var persona = {
  nombre: "Juan",
  edad: 25,
  profesion: "Ingeniero"
};
function presentarPersona(persona) {
  console.log("Nombre: " + persona.nombre);
  console.log("Edad: " + persona.edad);
  console.log("Profesión: " + persona.profesion);
}
presentarPersona(persona);

//3
function esMayorEdad(persona) {
  return persona.edad >= 18;
}
var persona12 = {
  nombre: "Juan",
  edad: 25,
  profesion: "Ingeniero"
};
var persona13 = {
  nombre: "Natali",
  edad: 17,
  profesion: "Estudiante"
};
console.log(esMayorEdad(persona12));
console.log(esMayorEdad(persona13));



