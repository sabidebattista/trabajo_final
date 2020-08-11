function validarForm(){
    let usuario = document.getElementById("usuario").value[0];
    let contra = document.getElementById("contra").value[0];
    if ((usuario == null) || (contra == null)) { 
    alert("Los campos no pueden quedar vacios");
    } else{ 
        window.location.href = "principal.html";
    };
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});
