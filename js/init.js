const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

var usuario = localStorage.getItem("usuario");
document.getElementById('nombreUsuario').innerHTML = usuario;




var nombre = localStorage.getItem("nomb");
var apellido = localStorage.getItem("ape");
var email = localStorage.getItem("email");
var edad = localStorage.getItem("edad");
var direcc = localStorage.getItem("direcc");
var cel = localStorage.getItem("cel");

if(nombre!=null && apellido!=null && email!=null && edad!=null && direcc!=null && cel!=null){
htmlToAppend = '';
htmlToAppend += `
<div>
<p> Nombre: ${nombre} </p>
<p> Apellido: ${apellido} </p>
<p> Email: ${email} </p>
<p> Edad: ${edad} </p>
<p> Dirección: ${direcc} </p>
<p> Celular: ${cel} </p>
</div>
`

document.getElementById('mostrarDatos').innerHTML = htmlToAppend;
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});


