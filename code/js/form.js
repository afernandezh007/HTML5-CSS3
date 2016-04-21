var form = document.getElementById("contact-form");
form.addEventListener("submit", function(evt){
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var misiones = {
        "mision1": document.getElementById("tipo_mision_1"),
        "mision2": document.getElementById("tipo_mision_2"),
        "mision3": document.getElementById("tipo_mision_3"),
        "mision4": document.getElementById("tipo_mision_4"),
    };
    var ejercito = document.getElementById("ejercito");
    var fecha = document.getElementById("fecha");

    if(nombre.checkValidity() == false){
        console.log("NOMBRE:",nombre.validity);
        nombre.focus();
        evt.preventDefault();
        return;
    }

    if(email.checkValidity() == false){
        if(email.validity.patternMismatch){
           console.log("Casi parece un email"); 
        }
        if(email.validity.typeMismatch){
           console.log("Introduce un email valido"); 
        }
        if(email.validity.valueMissing){
           console.log("Este campo es obligatorio"); 
        }
        email.focus();
        evt.preventDefault();
        return;
    }

    if(ejercito.checkValidity() == false){
        console.log("El campo ejercito no es correcto");
        ejercito.focus();
        evt.preventDefault();
        return;
    }

    if(fecha.checkValidity() == false){
        console.log("El campo fecha es incorrecto");
        fecha.checkValidity();
        evt.preventDefault();
        return;
    }

    if(misiones.mision1.checkValidity()== false){
        alert("Selecciona el tipo de misión");
        evt.preventDefault();
        return;
    }

});