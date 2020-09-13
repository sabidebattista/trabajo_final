    // MOSTRAR COMENTARIOS

    // Función para mostrar los comentarios contenidos en el JSON
    function showComents(com){
        comentsArray = com; // Array de comentarios
        

        let htmlToAppend = "";
        for(let j = 0; j<comentsArray.length; j++){
            let coment = comentsArray[j];

            let estrellitas = "";

            for(let i = 0; i<coment.score;i++){
                estrellitas+='<input id="r1" type="radio" name"estrellas" value="1" checked></input> <label for="r1">★</label>'
            } // Mostramos el "score" en forma de estrellitas

            htmlToAppend+=`
                <ul>
                    <ol>
                    <h4 class="mb-1">`+ coment.user + " " + `</h4>
                    <div class="puntuacion">` + estrellitas + `</div>
                    <p>`+ coment.description + ` <br>     
                    <small class="text-muted">` + coment.dateTime + ` </small></p>
                    <br>
                    </ol>
                  </ul>
            `
        };
        document.getElementById("comentario").innerHTML = htmlToAppend; // Muestro en el HTML

    }


    // AÑADIR NUEVO COMENTARIO   

    
    //Fecha del nuevo comentario

    date = new Date();
    day = date.getDate(); // Día
    if(day < 10){
        var day1 = "0" + day;
    }else{var day1 = day}; // Ajusto el formato del día

    month = date.getMonth(); // Mes
    if(month < 10){
        var month1 = "0" + month;
    }else{var month1 = month}; // Ajusto el formato del mes

    year = date.getFullYear(); // Año

    fecha = year + "-" +  month1 + "-" + day // Fecha del comentario

    //Hora del nuevo comentario

    time = date.getHours(); // Hora
    if(time < 10){
        var time1 = "0" + time;
    }else{var time1 = time}; // Ajusto el formato de la hora

    min = date.getMinutes(); // Minutos
    if(min < 10){
        var min1 = "0" + min;
    }else{var min1 = min}; // Ajusto el formato de los minutos

    sec = date.getSeconds(); // Segundos
    if(sec < 10){
        var sec1 = "0" + sec;
    }else{var sec1 = sec}; // Ajusto el formato de los segundos

    hora = time1 + ":" + min1 + ":" + sec1 // Hora del comentario

    // FECHA Y HORA
    fyh = fecha + " " + hora





    // Variable que va a tomar el valor del puntaje elegido (a través del "onclick" 
    //definido en los inputs del HTML)
    let puntaje = ""; 
    
    // Función para agregar comentario
    function addComent(comentario){
        
        let htmlToAppend = "";
        user = localStorage.getItem("usuario"); // Traigo el nombre de usuario

        let estrellitas = ''
        for(let i = 0; i<puntaje;i++){
            estrellitas+='<input id="ra1" type="radio" name"estrellas" value="1" checked></input> <label for="ra1">★</label>'
        } // "estrellitas" toma el valor de "puntaje"
    
        htmlToAppend += `
        <ul>
            <ol>
            <h4 class="mb-1">`+ user + " " + `</h4>
            <div class="puntuacion">` + estrellitas + `</div>
            <p>`+ comentario + ` <br>  
            <small class="text-muted">` + fyh + ` </small></p>
            <br>
            </ol>
          </ul>   `

        document.getElementById("nuevoComentario").innerHTML = htmlToAppend; // Muestro en el HTML

          puntaje = ""; // Vuelvo la variable a su valor original


    }

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;
            
            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCostHTML = document.getElementById("productCost");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = 'Cantidad vendida: ' + product.soldCount;
            productCostHTML.innerHTML = 'Precio: ' + product.currency + " " + product.cost;

        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comments = resultObj.data;
             
            // Muestro los comentarios
            showComents(comments);
        }
    });

});