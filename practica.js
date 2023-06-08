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