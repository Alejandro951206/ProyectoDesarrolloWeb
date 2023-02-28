document.querySelector("#btn_registrar").addEventListener("click", saveUser);
printSubs();
getClientList();
btn_registrar.disabled = true;


function validateCheck(btn_aceptar) {


    if (btn_aceptar.checked == true) {
  
      
      btn_registrar.disabled = false;
  
    } else {
  
      btn_registrar.disabled = true;
  
    }
  }

function saveUser(){

client_name = document.getElementById("exampleInputName1").value;
client_email = document.getElementById("exampleInputEmail1").value;
client_phone = document.getElementById("exampletelefone1").value;
client_country = document.getElementById("pais_select").value;


if (client_name != "" && client_email != "" && client_phone != "" && client_country != "" ) {

    
let  Sname = document.querySelector("#exampleInputName1").value,     
     Sphone = document.querySelector("#exampletelefone1").value,
     Semail = document.querySelector("#exampleInputEmail1").value,
     Scountry = document.querySelector("#pais_select").value;
     

     suscribe(Sname,Semail,Sphone,Scountry);  
    
     Swal.fire(      
      'Registro completado!',     
    )
     printSubs();

     
   
    }else {

        window.alert("Se requieren todos los campos para continuar")        
        

    }
    
}


function printSubs(){

    let list = sublist(),
        tbody = document.querySelector("#SubsClients tbody");
        
       
    
        
        tbody.innerHTML = '';

        for (let i = 0; i < list.length; i++) {

            

            let row = tbody.insertRow(i),              
                name_cell = row.insertCell(0),
                email_Cell = row.insertCell(1),
                phone_cell = row.insertCell(2),
                country_cell = row.insertCell(3),
                select_cell = row.insertCell(4);          
            
              
            name_cell.innerHTML = list[i].name;
            email_Cell.innerHTML = list[i].email;
            phone_cell.innerHTML = list[i].phone;
            country_cell.innerHTML = list[i].country;
           

            let inputSelect = document.createElement('input');
            inputSelect.type = 'checkbox';            
            inputSelect.value = list[i].name;
            select_cell.appendChild(inputSelect);


            tbody.appendChild(row);
                       

        }

        
       

}

let busqueda = document.getElementById('buscar');
    let table = document.getElementById("SubsClients").tBodies[0];

    buscaTabla = function(){
      texto = busqueda.value.toLowerCase();
     let r=0;
      while(row = table.rows[r++])
      {
        if ( row.innerText.toLowerCase().indexOf(texto) !== -1 )
          row.style.display = null;
        else
          row.style.display = 'none';
      }
    }

    busqueda.addEventListener('keyup', buscaTabla);

  

  