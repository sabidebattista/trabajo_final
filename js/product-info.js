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

            let user = coment.user.replace('_',' '); // Separo nombre y apellido con espacio
            let user2 = user.replace(/\b\w/g, l => l.toUpperCase()); // Paso a mayúscula primer letra del nombre y apellido

            htmlToAppend+=`
                <ul>
                    <ol>
                    <h4 class="mb-1">`+ user2 + " " + `</h4>
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

    
    // MOSTRAR PRODUCTOS RELACIONADOS

    // Función para mostrar imágenes de productos relacionados

    function showRelatedImg(array){

        let htmlContentToAppend = "";

        for(let i = 0; i < array.length; i++){
            let related = array[i];
    
            htmlContentToAppend += `
            <div class="related">
                <div class="d-block mb-4 h-100">
                <h4>`+ related.name + ` </h4> 
                <img src="` + related.imgSrc + `" alt="` + `" class="img-thumbnail">
                <br>
                <div class="col">
                <div class=" w-100">
                    <p class="text-muted text-left ">` + related.description + `</p> 
                </div>
                <p class="text-muted text-left small"> 
                Precio: ` + related.currency +  + related.cost + `<br> 
                Cantidad vendida: ` + related.soldCount + `
                </p>
                <button onclick=window.location.href="product-info.html" class="verProducto"> Ver producto </button>
            </div>

                </div>
            </div>
            `
            
            // Muestro las imágenes en el HTML
            document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;  
        }
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

            // Muestro las características del producto
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = 'Cantidad vendida: ' + product.soldCount;
            productCostHTML.innerHTML = 'Precio: ' + product.currency + " " + product.cost;
            
            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if (resultObj.status === "ok"){
        
                    prodArray = resultObj.data; // Array con todos los productos
                    relatedProducts = product.relatedProducts; // Array con los índices de los productos relacionados
        
                    relatedProductsHTML = [];  // Creo un Array vacío para luego hacer un "push" de los relacionados
        
                    for(let y = 0; y<relatedProducts.length; y++){
                    relatedProductsHTML.push(prodArray[relatedProducts[y]]);
                    } 
                    // relatedProducts[0] = 1  =>  prodArray[1] contiene la info del Fiat Way
                    // relatedProducts[1] = 3  =>  prodArray[3] contiene la info del Peugeot 208
                    
                    // Muestro las imágenes de los productos relacionados
                    showRelatedImg(relatedProductsHTML);
        
                }
            });

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