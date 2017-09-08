$("#guardar").on('click', guardarDatos);
$("#limpiar").on('click', limpiar);

function guardarDatos() { //funcion que guarda los datos en el localStorage 
	if($("#clave").val() && $("#valor").val()){ //solo se guarda cuando se lleno los campos
		localStorage.setItem(localStorage.length, $("#clave").val() +','+ $("#valor").val());
		$("#clave").val('');//se vacea los inputs
		$("#valor").val('');
		comentario();
		console.log(localStorage)
	} 
}

function comentario() { //funcion que imprime los comentarios
	$("#ale").empty();
	if (localStorage.length > 0) { //cuando hay datos
		$.each(localStorage, (key, value)=>{
			let array = value.split(','); //se crea un array con los valores, nombre y comentario
			$("<div>").addClass('comentario row').append(
				$('<div>').addClass('col-md-2 col-sm-4 col-xs-4 text-center').append(
					$("<h2>").addClass('fa fa-user-circle fa-fw')
				)
			).append(
				$('<div>').addClass('col-md-9 col-sm-6 col-xs-6').append(
					$("<h3>").html(array[0])
				).append(
				$("<p>").html(array[1])
			)).appendTo("#ale");
		})
	} else { //cuando el localStorage está vacio
		$("<div>").append('No hay comentarios').appendTo("#ale");
	}
}

comentario();

function limpiar() { //funcion que limpia el localStorage
	localStorage.clear();
	comentario();
}
