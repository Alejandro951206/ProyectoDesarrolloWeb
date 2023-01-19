$(document).ready(function(){
	$("#btn_registrar").click(function(){

	let validado = 0;


    //Validar Nombre Cliente
    if ($("#nombre_cliente").val().length == 0) {
    	$("#mensaje_nombrecliente").text("*"); 	
    }else if ($("#nombre_cliente").val().length > 30) 
    { $("mensaje_nombrecliente").text("*")
    		
    		Swal.fire(
    		'El nombre de cliente no debe superar los 30 caracteres.'
        		)                

    }else if ($("#nombre_cliente").val().length <= 30) {
    	$("#mensaje_nombrecliente").text("");
      validado++;
    }

    //Validar Correo Cliente

    if ($("#correo_cliente").val().length == 0) {
    	$("#orreo_nombrecliente").text("*"); 	
    }else if ($("#orreo_cliente").val().length > 30) 
    { $("mensaje_correocliente").text("*")
    		
    		Swal.fire(
    		'El nombre de cliente no debe superar los 30 caracteres.'
        		)

    }else if ($("#nombre_cliente").val().length <= 30) {
    	$("#mensaje_nombrecliente").text("");
      validado++;
    }

    //validar celular

    if ($("#celular").val().length == 0) {
    	$("#mensaje_celular").text("*"); 	
    }else {
    	$("#mensaje_celular").text(""); 
    	validado++;
    }

    //validar país	

    if ($("#pais_select").val().length == 0) {
        $("#mensaje_pais").text("*");                 
      } else {
        $("#mensaje_pais").text("");     
        validado++;
      }

    if (validado == 4) 
    {

    Swal.fire(
              'Excelente!',
              'Registro guardado correctamente!',
              'success'
        )

    } 

    //Validar actualizaciones



    //Validar terminos&Condiciones

	});

});

