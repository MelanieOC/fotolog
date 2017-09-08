/*aquí va tu código*/
$("#guardar").on('click', guardarDatos);
$("#limpiar").on('click', limpiar);

function guardarDatos() {
	if($("#clave").val() && $("#valor").val()){
		localStorage.setItem(localStorage.length, $("#clave").val() +','+ $("#valor").val());
		$("#clave").val('');
		$("#valor").val('');
		comentario();
	}
	console.log(localStorage)
}

function comentario() {
	$("#ale").empty();
	if (localStorage.length > 0) {
		$.each(localStorage, (key, value)=>{
			var array = value.split(',');
			$("<div>").addClass('comentario row').append(
				$('<div>').addClass('col-md-2 col-sm-4 col-xs-4 text-center').append(
					$("<h3>").addClass('fa fa-user-circle fa-4x fa-fw')
				)
			).append(
				$('<div>').addClass('col-md-9 col-sm-6 col-xs-6').append(
					$("<h3>").html(array[0])
				).append(
				$("<p>").html(array[1])
			)).appendTo("#ale");
		})
	} else {
		$("<div>").addClass('col-md-9 col-sm-6 col-xs-6').append('No hay comentarios').appendTo("#ale");
	}
}

comentario();

function limpiar() {
	localStorage.clear();
	comentario();
}
