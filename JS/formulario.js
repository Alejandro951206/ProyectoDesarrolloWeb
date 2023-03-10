let subscriptions = [];   


function suscribe(Cname,Cphone,Cemail,Ccountry){

     let newClient = {

       name : Cname,
       phone : Cphone,
       email : Cemail,
       country : Ccountry
       

     };

     console.log(newClient);
     subscriptions.push(newClient);
     LocalStorageClientList(subscriptions);

}

function getClientList(){

     let storagegate = localStorage.getItem("LocalStorageClientList");
     if (storagegate == null){

          subscriptions = [];

     }else{

          subscriptions = JSON.parse(storagegate);
     }

     return subscriptions;

}

function LocalStorageClientList(plist){

     localStorage.setItem("LocalStorageClientList", JSON.stringify(plist));

}

function sublist() {

     return subscriptions;
}

