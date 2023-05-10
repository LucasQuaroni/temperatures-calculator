let origen = 0;
let salida = 0;
const valor = document.getElementById("num");
const result = document.getElementById("result");
//Origen y salida Inicializan los formatos de temperaturas 
//Inicia los valores de entrada y salida, los selecciona del DOM


// Obtiene los botones seleccionables y les otorga una clase si se los selecciona(estilos) y da valor a ORIGEN
var botones1 = document.querySelectorAll(".btninput");
// Agregar un event listener a cada botón
for (var i = 0; i < botones1.length; i++) {
  botones1[i].addEventListener("click", function () {
    // Desmarcar todos los botones
    for (var j = 0; j < botones1.length; j++) {
      botones1[j].classList.remove("seleccionado1");
    }
    // Marcar el botón seleccionado
    this.classList.add("seleccionado1");
    origen = this.dataset.temp;
  });
}

// Obtiene los botones seleccionables y les otorga una clase si se los selecciona(estilos) y da valor a SALIDA
var botones2 = document.querySelectorAll(".btnoutput");
// Agregar un event listener a cada botón
for (var i = 0; i < botones2.length; i++) {
  botones2[i].addEventListener("click", function () {
    // Desmarcar todos los botones
    for (var j = 0; j < botones2.length; j++) {
      botones2[j].classList.remove("seleccionado2");
    }
    // Marcar el botón seleccionado
    this.classList.add("seleccionado2");
    salida = this.dataset.temp;
  });
}


//"Espera" a que lo llame el boton
const ejecutar = document.querySelector(".ejecutar");
ejecutar.addEventListener("click", () => {
  if (origen === salida) {
    result.textContent = valor.value;
  }

  let temperatura;

  switch (origen) {
    case "Roemer":
      temperatura = (valor.value - 7.5) * 40 / 21;
      break;
    case "Farenheit":
      temperatura = (valor.value - 32) * 5 / 9;
      break;
    case "Celcius":
      temperatura = valor.value;
      break;
    case "Kelvin":
      temperatura = valor.value - 273.15;
      break;
    default:
      break;
  }

  switch (salida) {
    case "Roemer":
      temperatura = (temperatura * 21 / 40) + 7.5;
      break;
    case "Farenheit":
      temperatura = (temperatura * 9 / 5) + 32;
      break;
    case "Celcius":
      break;
    case "Kelvin":
      temperatura = (temperatura * 1) + 273.15;
      break;
    default:
      break;
  }

  result.textContent = temperatura.toFixed(2);
});
