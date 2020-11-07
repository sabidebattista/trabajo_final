/*,apellido,email,edad,direcc,cel*/
let Pnombre = document.getElementById('Pnombre').value[0];

function guardarDatos(dato){
    
    datex = localStorage.setItem("Pnombre",JSON.stringify(dato));
    alert(datex);
   
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    
    
});