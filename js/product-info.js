    // Funcion para mostrar comentarios

    function showComents(com){
        comentsArray = com;
        

        let htmlToAppend = "";
        for(let j = 0; j<comentsArray.length; j++){
            let coment = comentsArray[j];
            let estrellitas = "";

            for(let i = 0; i<coment.score;i++){
                estrellitas+='<input id="r1" type="radio" name"estrellas" value="1" checked></input> <label for="r1">★</label>'
            }

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
        document.getElementById("comentario").innerHTML = htmlToAppend;

    }

    function addComent(comentario){
        
        let htmlToAppend = "";
        let user = document.getElementById('nombreUsuario');
        
        htmlToAppend += `
        <ul>
            <ol>
            <h4 class="mb-1">`+ user + " " + `</h4>
            <p>`+ comentario + ` <br>     
            <br>
            </ol>
          </ul>   `

          document.getElementById("nuevoComentario").innerHTML = htmlToAppend;


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
             //Muestro las imagenes en forma de galería
            showComents(comments);
        }
    });

});