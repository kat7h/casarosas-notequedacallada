//LETRA DE INTRODUCCIÓN ANIMADA (Tipo: máquina de escribir)

//Primero capturamos el elemento del DOM con el id que definimos en el html
const text = document.getElementById("animate-text");
let str = text.innerHTML;
text.innerHTML = "";

//Declaramos una varible en la que asignaremos un valor para que sea el tiempo en ms que durará la función setTimeout
const speed = 65;
let i = 0;

//Esta función recorre todos los caracteres nuestro texto
const typeWriter = () => {
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

//Acá ejecutamos la función
setTimeout(typeWriter, speed);

//MENÚ DESPLEGABLE DE ESQUINA SUPERIOR IZQUIERDA (Tipo: menú hamburguesa)

// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/


