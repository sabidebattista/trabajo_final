function validarForm(){
    let usuario = document.getElementById("usuario").value[0];
    let contra = document.getElementById("contra").value[0];
    if ((usuario == null) || (contra == null)) { 
    alert("Los campos no pueden quedar vacios");
    } else{ 
        window.location.href = "principal.html";
    };
}

function guardar(dato,pass){

    if (dato.trim()==="" || pass.trim()===""){
        window.location.href = "index.html";
    } else{
        localStorage.setItem("usuario", dato.trim());
        localStorage.setItem("contraseña", pass.trim());
        alert(" Bienvenido/a " + dato );

        location.href = "principal.html";
    }
}

var usuario = localStorage.getItem("usuario");
document.getElementById('usuario').innerHTML = usuario;

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});
