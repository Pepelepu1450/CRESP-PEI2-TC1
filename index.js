var elements = document.getElementsByTagName("body");
//console.log('elements', elements);

var body = elements[0];

//Agregar atributo class al body
//body.className = "background-red";
var colorClasses = ["background-red","background-blue","background-green","backgorund-yellow"];

//seleccionar un indce alatorio
var cambiarColor = function(){
    var colorIndex = Math.floor(Math.random() * colorClasses.length);

    var selectorColorClass = colorClasses[colorIndex];

    body.className = selectorColorClass;
};

// calbiar color solo la pagina
cambiarColor ();

var botonCambiar = document.getElementById("boton_cambiar");
//botonCambiar.onclick = function(){
//    cambiarColor();
//};

//Boton que cambia de color la pagina al darle click
botonCambiar.onclick = cambiarColor;

//cambiar color cada cada cierto segundos
setInterval(cambiarColor, 1000);