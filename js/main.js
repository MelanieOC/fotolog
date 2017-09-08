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
}

function comentario() {
	$("#ale").empty();
	if (localStorage.length > 0) {
		$.each(localStorage, (key, value)=>{
			var array = value.split(',');
			$("<div>").addClass('comentario row').append(
				$('<div>').addClass('col-md-2 col-sm-2 col-xs-2').append(
					$("<i>").addClass('fa fa-user-circle fa-5x fa-fw')
				)
			).append(
				$('<div>').addClass('col-md-10 col-sm-10 col-xs-10').append(
					$("<h3>").html(array[0])
				).append(
				$("<p>").html(array[1])
			)).appendTo("#ale");
		})
	}
}

comentario();

function limpiar() {
	localStorage.clear();
	comentario();
}
