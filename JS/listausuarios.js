document.querySelector("#btn_registrar").addEventListener("click", saveUser);
printSubs();

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
     printSubs();

     
   
    }else {

        window.alert("Se requieren todos los campos para continuar")

    }
}


function printSubs(){

    var list = sublist(),
        tbody = document.querySelector("#SubsClients tbody");
        
        tbody.innerHTML = '';

        for (var i = 0; i < list.length; i++) {

            var row = tbody.insertRow(i),
                name_cell = row.insertCell(0),
                email_Cell = row.insertCell(1),
                phone_cell = row.insertCell(2),
                country_cell = row.insertCell(3);
                select_cell = row.insertCell(4)

            name_cell.innerHTML = list[i].name;
            email_Cell.innerHTML = list[i].email;
            phone_cell.innerHTML = list[i].phone;
            country_cell.innerHTML = list[i].country;


            var inputSelect = document.createElement('input');
            inputSelect.type = 'radio';
            inputSelect.value = list[i].name;
            select_cell.appendChild(inputSelect);


            tbody.appendChild(row);

        }


}


