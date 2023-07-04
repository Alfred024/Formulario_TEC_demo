
const folio = document.getElementById("folio");
const curp = document.getElementById("curp");
const form = document.getElementById("form");
const folioError = document.getElementById("folio-error");
const curpError = document.getElementById("curp-error");


let reCaptcha = false;

function callback() { //Se ejecuta cada vez que la respuesta del reCaptcha es aceptada
    reCaptcha = true;
}

function expiredCallback() {
    reCaptcha = false;
}


form.addEventListener('submit', (e) => {

    e.preventDefault();

    let peticion = true;

    folioError.innerHTML = "";

    curpError.innerHTML = "";

    if(folio.value.length == 0){ // Si se escribio nada
        folioError.innerHTML = "Requerido*";
        peticion = false;
    }

    if(folio.value.length < 8 && folio.value.length > 0){ // Si contiene menos caracteres
        folioError.innerHTML = "Formato no válido";
        peticion = false;
    }


    if(curp.value.length == 0){ // Si se escribio nada
        curpError.innerHTML = "Requerido*";
        peticion = false;
    }

    if(curp.value.length < 18 && curp.value.length > 0){ // Si contiene menos caracteres
        curpError.innerHTML = "Formato no válido";
        peticion = false;
    }



    if(peticion & reCaptcha){
        // Request datos solicitados va aqui
        console.log('peticion');
    }

});




