/*aquí va tu código*/
$("#guardar").on('click', guardarDatos);
$("#limpiar").on('click', limpiar);
console.log(localStorage);
function guardarDatos() {
	localStorage.setItem($("#clave").val(),$("#valor").val())
	
	console.log(localStorage);
}

function recuperarDatos() {
	if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
		$("#datos").html("Nombre: " + localStorage.nombre + "<br> Password: " + localStorage.password);
	}else{
		$("#datos").html('No has introducido tu nombre y tu password');
	}
}

function limpiar() {
	localStorage.clear();
}