/*,apellido,email,edad,direcc,cel*/
/* let Pnombre = document.getElementById('Pnombre').value[0];

function guardarDatos(dato){
    
    datex = localStorage.setItem("Pnombre",JSON.stringify(dato));
    alert(datex);
   
} */



/* function mostrarDatos(){

nombre = document.getElementById('Pnombre').value;
apellido = document.getElementById('Papellido').value;
email = document.getElementById('Pemail').value;
edad = document.getElementById('Pedad').value;
direcc = document.getElementById('Pdirecc').value;
cel = document.getElementById('Pcel').value;


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

} */

nombre = document.getElementById('Pnombre');
apellido = document.getElementById('Papellido');
email = document.getElementById('Pemail');
edad = document.getElementById('Pedad');
direcc = document.getElementById('Pdirecc');
cel = document.getElementById('Pcel');

function guardarDatos(nomb,ape,email,edad,direcc,cel){

localStorage.setItem('nomb',nomb);
localStorage.setItem('ape',ape.trim());
localStorage.setItem('email',email.trim());
localStorage.setItem('edad',edad.trim());
localStorage.setItem('direcc',direcc.trim());
localStorage.setItem('cel',cel.trim());

}


function muestro(){
    var nombre = localStorage.getItem("nomb");
    var apellido = localStorage.getItem("ape");
    var email = localStorage.getItem("email");
    var edad = localStorage.getItem("edad");
    var direcc = localStorage.getItem("direcc");
    var cel = localStorage.getItem("cel");
    
    document.getElementById('Pnombre').value = nombre;

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

/* FOTOOOOO
 *//* window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });
 */  



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    
    
});