<!DOCTYPE html>

<html>


<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="with=dive-width, initial-scale=1.0">
    <title>MundoNatural</title>
    <link rel="shortcut icon" href="./Imagenes/mundonatural.png">
    <link rel="stylesheet" href="./CSS/Stylesheet.css">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</head>

<body>


 <header class="header">  
     <!-- Menu principal y nombre de la pagina -->
    <div class="header__logo">
        
        <h1>MUNDO NATURAL</h1> 
    </div>   
</header>


    
    <!-- Menu de opciones -->
<div class="flex__container">
    
    <div class="flex-menu">    
       <a class="opcion1" href="./Pages/coleccionflora.html" target="_parent"> COLECCIÓN DE FLORA </a>
       </div>
      
        <div class="flex-menu">     
          <a href="./Pages/Coleccionlugares.html" target="_parent"> COLECCIÓN DE LUGARES </a>
         </div>
         
        <div class="flex-menu">
        <a href="./Pages/coleccionmaravillas.html" target="_parent"> COLECCIÓN DE MARAVILLAS </a>
        </div> 
                    
        <div class="flex-menu">
        <a href="./Pages/Coleccionfauna.html" target="_parent"> COLECCIÓN FAUNA </a>
      </div>
            
    </div>



 <!-- Imagen principal -->
<div>
    <div class="image__Container">
      <img class="Img" src="./Imagenes/guacamayos.jpg" alt="logoimg">
    </div>
</div>

     <!-- Seguimiento usuarios -->
       
    <h2 class="sucribete">Suscribeté a nuestras noticias</h2>

<form action="enviar.php" method="get" class="Form-container">

    

    <div class="col-md-6">   
            
        <label for="exampleInputName1" class="form-label margin-name">Nombre</label>
        <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp">    
        
        <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

    
   
    
       <label for="telefono" class="form-label">Telefono: </label>
        <input type="text" class="form-control" id="exampletelefone1" aria-describedby="textHelp">
     
        <br/>   
   
        <label >Desea recibir actualizaciones?</label>   
        <br/> 
        <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" checked>
        <label class="form-check-label" for="flexRadioDefault2"> Si </label>
        <br/>
        <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2"> 
        <label class="form-check-label" for="flexRadioDefault2"> No </label>
    
       <br/>
       <br/>

        <select name="país" class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Seleccione país de residencia</option>
            <option id="countrySelect1" value="1">Argentina</option>
            <option id="countrySelect2" value="2">Colombia</option>
            <option id="countrySelect3" value="3">Chile</option>
            <option id="countrySelect4" value="4">Mexíco</option>
            <option id="countrySelect5" value="5">Perú</option>
            <option id="countrySelect6" value="6">Otros</option>
        </select>   
        
        <br/>

        <label>Acepta terminos y condiciones?</label>
        <br/>
        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" checked>
        <label class="form-check-label" for="flexRadioDefault2"> Si </label>
        <br/>
        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault4"> 
        <label class="form-check-label" for="flexRadioDefault2"> No </label>

        <br/>
        <br/>


        <button for="exampleSubmit1" type="submit" class="btn btn-primary margin-button">Enviar</button>
        
        <button for="exampleClean1" type="reset" class="btn btn-secondary margin-button">Limpiar</button> 

    </div>   
    


    </form>   
   

    <hr>

    <h3 class="item-text"> Colección natural </h3>
 <div class="video_item">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZsEBMwH5UJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


    <footer class="footer-page"> 
        <div>

        <a class="footer-text">Derechos reservados.</a>  </div>


</footer> 

</body>

</html>