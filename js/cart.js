var subtotal = 0;
let canti = 0;
let total = 0;
let shipping = 0;
let count = 0;
let totalParcial = 0;


/* FUNCION PARA MOSTRAR EL CARRITO CON LOS PRODUCTOS */

function showCart(array) {
  var cart = array;

  
  /* Encabezado de la tabla */
  let listado = `<table> <th></th><th> Producto </th><th></th><th></th><th> Precio </th><th></th><th> Cantidad </th><th></th><th> Subtotal </th><th></th><th> Eliminar </th><th></th>`;

  /* Si el carrito está vacío mostrar: */
  if (cart.articles.length == 0){
    listado+=`
    </table>
    <tr align='center'>
    <td> El carrito está vacío </td>
    </tr>
    `
  } else{

  /*Obtengo la información de los productos y la agrego a la tabla*/
  for (i = 0; i < cart.articles.length; i++) {
    carrito = cart.articles[i];
    canti = carrito.count;

    var cantidad =
      `<input type="number" style="width: 3em" id="cant${i}" min="0" value="` + canti + `" onchange="canti=value;showTotal(carro);">`;

     

    listado +=
      `<tr align='center'><td><img style=height:4em src="` +
      carrito.src +
      `" alt=" class="img-thumbnail h-50 w-50"></td><td>` +
      carrito.name +
      `</td><td></td><td></td><td>` +
      carrito.currency +
      " " +
      carrito.unitCost +
      `</td><td></td><td>` +
      cantidad +
      `<td></td><td> <p id="subto${i}"></p> 
      <td></td><td> <button id='eliminar${i}' onclick="carro.articles.splice(${i},1);showCart(carro);showTotal(carro);" class="eliminar"> <i class="fas fa-trash-alt"></i> </button> 
      <td></td></tr>`;
      console.log(carro.articles[i]);
  }}

  /* Cierro la tabla*/
  listado += `</table>`;

  /* Muestro en el HTML la tabla */
  document.getElementById("carro").innerHTML = listado;
}






/* FUNCION PARA MOSTRAR EL SUBTOTAL */

function showTotal(array){
  let cart = array;
  let cantidad = 0;
  subtotal = 0;

  for(j = 0; j < cart.articles.length; j++){
    articulos = cart.articles[j];    

    canti = Math.round(document.getElementById("cant"+ j).value);
    console.log(canti);
    cantidad += canti;
    let sub = Math.round(canti * articulos.unitCost);

    if(articulos.currency==="USD"){
        subtotal += sub;
        sub2 = sub;
    } else if(articulos.currency==="UYU") {
        subtotal += sub / 40;
        sub2 = sub / 40;

    } 

  document.getElementById('subto'+j).innerHTML = 'USD ' + sub2;

  }

  /* Muestro la cantidad en el dropdown del HTML*/
  document.getElementById("cont").innerHTML = cantidad;

  /* Muestro el subtotal en el HTML */
  document.getElementById("subtotal").innerHTML = 'USD ' + subtotal; 

  /* Muestro el envio en el HTML */
  if (shipping!=0){
    envio = Math.round(subtotal*shipping)
    document.getElementById("envio").innerHTML = 'USD ' + envio;

    total = Math.round(subtotal*(1+shipping));
    document.getElementById("total").innerHTML = 'USD ' + total;
  } else if(shipping==0){
    envio = Math.round(subtotal*0.05)
    document.getElementById("envio").innerHTML = 'USD ' + envio;

    total = Math.round(subtotal+envio);
    document.getElementById("total").innerHTML = 'USD ' + total;
  }
}







/*  POPOVER del CVV  */
$(document).ready(function() {
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
});


/* DESPLEGAR DIVS MODO DE PAGO */
$(document).ready(function(){
  $(".pago").click(function(evento){
    
      var valor = $(this).val();
    
      if(valor == 'Tarjeta de crédito o débito'){
          $("#desplegable1").css("display", "block");
          $("#desplegable2").css("display", "none");
      }else if(valor == 'Transferencia bancaria'){
          $("#desplegable1").css("display", "none");
          $("#desplegable2").css("display", "block");
      }else{
          $("#desplegable1").css("display", "none");
          $("#desplegable2").css("display", "none");
      };
});
});





/* Inicializo variables para corroborar ok de pago y envío y así luego mostrar modal de compra exitosa */
var okPago = "";
var okEnvio = "";

/* VALIDAR DATOS DEL PAGO */
function validarPago(){
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let numTarjeta = document.getElementById('numTarjeta').value;
  let cvv = document.getElementById('cvv').value;
  let titular = document.getElementById('titular').value;
  let cuenta = document.getElementById('cuenta').value;
  let banco = document.getElementById('banco').value;


  if(document.getElementById('tarjeta').checked){
      if(nombre == "" || apellido == "" || numTarjeta == "" || cvv == ""){
      document.getElementById('pagoElegido').innerHTML = `<small class="mal">`+ "Debe completar los datos referidos al método de pago" + `</small>`;
      okPago = "mal";
    } else{
      document.getElementById('pagoElegido').innerHTML=document.getElementById('tarjeta').value;
      okPago = "ok";
    } 
  } else if(document.getElementById('transferencia').checked){
    if(titular == "" || cuenta == "" || banco == ""){
      document.getElementById('pagoElegido').innerHTML = `<small class="mal">`+ "Debe completar los datos referidos al método de pago" + `</small>`;
      okPago = "mal";
    } else{
      document.getElementById('pagoElegido').innerHTML=document.getElementById('transferencia').value;
      okPago = "ok";
    }
  } else if(document.getElementById('transferencia').checked == false && document.getElementById('tarjeta').checked == false){
    document.getElementById('pagoElegido').innerHTML = `<small class="mal">`+ "Debe completar los datos referidos al método de pago" + `</small>`;
    okPago = "mal";
  } 
  };




/* VALIDACIÓN DATOS DE ENVÍO */
var validaciones = document.querySelectorAll('span.validacion');

function checkForm(){
  for(let i = 0; i< validaciones.length; i++){
    let elemento = validaciones[i];

    var inputID = document.getElementById(elemento.id+"-input");
    var inputIDValue = document.getElementById(elemento.id+"-input").value;
    var validacion = document.getElementById(elemento.id);

  if(inputIDValue==""){
    inputID.classList.remove("is-valid");
    inputID.classList.add("is-invalid");
    validacion.classList.remove("bien");
    validacion.classList.add("mal");
    validacion.innerHTML = `Debe ingresar su ${elemento.id}`;
    okEnvio = "mal";
  }else{
    inputID.classList.remove("is-invalid");
    inputID.classList.add("is-valid");
    validacion.classList.remove("mal");
    validacion.classList.add("bien");
    validacion.innerHTML = "";
    okEnvio = "ok";
  };

  if(subtotal == 0){
    swal({
      title: "El carrito está vacío", 
      text: "Por favor seleccionar los productos a comprar", 
      type: "error",
      confirmButtonColor: "#fc74b6"
    })
  }
  };
}

/* MOSTRAR MODAL DE COMPRA EXITOSA */
function compraExitosa(){
  if(okPago == "ok" && okEnvio== "ok" && subtotal != 0){
    swal({
      title: "¡Compra exitosa!", 
      text: "Muchas gracias por elegirnos.", 
      type: "success",
      confirmButtonColor: "#fc74b6"
    }).then(function() {
        window.location = "products.html";
    });
  }
};


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      carro = resultObj.data;
      console.log(carro.articles);

      /*Muestro el carrito*/
      showCart(carro);
      
      /*Muestro el subtotal*/
      showTotal(carro);

   };
});


document.getElementById("subtotal").addEventListener("change", function(){
  subtotal = document.getElementById("subtotal").value;
});   


/* Muestro el envío y el total en base al método elegido*/

document.getElementById('premium').addEventListener("change", function(){
  shipping = 0.15;
  envio = Math.round(subtotal*shipping)
  document.getElementById("envio").innerHTML = 'USD ' + envio;

  total = Math.round(subtotal*(1+shipping));
  document.getElementById("total").innerHTML = 'USD ' + total;
  })

document.getElementById('express').addEventListener("change", function(){
  shipping = 0.07;
  envio = Math.round(subtotal*shipping)
  document.getElementById("envio").innerHTML = 'USD ' + envio;

  total = Math.round(subtotal*(1+shipping));
  document.getElementById("total").innerHTML = 'USD ' + total;
  })

document.getElementById('standard').addEventListener("change", function(){
  shipping = 0.05;
  envio = Math.round(subtotal*shipping)
  document.getElementById("envio").innerHTML = 'USD ' + envio;

  total = Math.round(subtotal*(1+shipping));
  document.getElementById("total").innerHTML = 'USD ' + total;
  })

});
