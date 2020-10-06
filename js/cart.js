var subtotal = 0;
let canti = 0;
let total = 0;
let shipping = 0;
let count = 0;
/* FUNCION PARA MOSTRAR EL CARRITO CON LOS PRODUCTOS */

function showCart(array) {
  let cart = array;

  /* Encabezado de la tabla */
  let listado = `<table> <th></th><th> Producto </th><th></th><th></th><th> Precio </th><th></th><th> Cantidad </th><th></th>`;

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
      `<td></td></tr>`;
  }

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
    } else if(articulos.currency==="UYU") {
        subtotal += sub / 40;
    }
  }
  /* Muestro la cantidad en el dropdown del HTML*/
  document.getElementById("cont").innerHTML = cantidad;
  /* Muestro el subtotal en el HTML */
  document.getElementById("subtotal").innerHTML = 'USD ' + subtotal; 

  if (shipping!=0){
    envio = Math.round(subtotal*shipping)
    document.getElementById("envio").innerHTML = 'USD ' + envio;

    total = Math.round(subtotal*(1+shipping));
    document.getElementById("total").innerHTML = 'USD ' + total;
  } else if(shipping==0){
    document.getElementById("envio").innerHTML = '-';
  }
}






//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      carro = resultObj.data;

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
