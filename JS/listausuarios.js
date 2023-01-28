document.querySelector("#btn_registrar").addEventListener("click", saveUser);


function saveUser(){

client_name = document.getElementById("exampleInputName1").value;
client_email = document.getElementById("exampleInputEmail1").value;
client_phone = document.getElementById("exampletelefone1").value;
client_country = document.getElementById("pais_select").value;

if (client_name != "" && client_email != "" && client_phone != "" && client_country != "") {

    
var  Sname = document.querySelector("#exampleInputName1").value,     
     Sphone = document.querySelector("#exampletelefone1").value,
     Semail = document.querySelector("#exampleInputEmail1").value,
     Scountry = document.querySelector("#pais_select").value;

     suscribe(Sname,Semail,Sphone,Scountry);
     window.alert("Registro completado!")

     
   
    }else {

        window.alert("Se requieren todos los campos para continuar")

    }
}