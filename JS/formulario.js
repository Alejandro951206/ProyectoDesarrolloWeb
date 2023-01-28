



 
 
function checkinfo(){    

client_name = document.getElementById("exampleInputName1").value;
client_email = document.getElementById("exampleInputEmail1").value;
client_phone = document.getElementById("exampletelefone1").value;
client_country = document.getElementById("pais_select").value;

   if (client_name != "" && client_email != "" && client_phone != "" && client_country != "") {

        window.alert("Registro completado, biendevenido "+client_name)
        

   }else {

        window.alert("Se requieren todos los campos para continuar")
   }   

  
}


function suscribe() {

     client_name = document.getElementById("exampleInputName1").value;
     client_email = document.getElementById("exampleInputEmail1").value;
     client_phone = document.getElementById("exampletelefone1").value;
     client_country = document.getElementById("pais_select").value;

     var Arrayalmacen = [client_name,client_email,client_phone,client_country];

     for (i = 0; i > 4; i++){

      


     }


}



