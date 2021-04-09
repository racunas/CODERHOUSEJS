// const inputName = document.querySelector("#inputName");
// const inputEmail = document.querySelector("#inputEmail");
// const inputSubject = document.querySelector("#inputSubject");
// const inputTextarea = document.querySelector("#inputTextarea");
// const contactForm = document.querySelector("#contact-form");
// const listP = document.querySelector("#warning");
// const answers = [];

// contactForm.addEventListener("submit", e => {
//     e.preventDefault();
    
//     answers.push(inputName.value);
    
//     let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     if(!regexEmail.test(inputEmail.value)){
//         return alert("Ingresa un correo válido");
//     } else{
//         answers.push(inputEmail.value);
//     }

//     answers.push(inputSubject.value);
//     answers.push(inputTextarea.value);

//     console.log(answers);
//     localStorage.setItem("formularioContacto", JSON.stringify(answers));
    
//     contactForm.reset();
    
//     sayThanks();
//     setTimeout(deleteThanks,10000);
// });

// const sayThanks = function() {
//     thanks = document.createElement("p");
//     thanks.textContent = `Gracias, tu mensaje se ha enviado con éxito. Nos pondremos en contacto contigo en cuanto antes.`;
//     thanks.setAttribute("class","warning");
//     listP.appendChild(thanks);
// }

// const deleteThanks = function() {
//     listP.remove("p");
// }

$("#contact-form").submit(function(e){
    // Se ejecuta la función preventDefault para que el formulario no se envíe y recargue la página
    e.preventDefault();

    // Se obtienen los valores de del formulario, y  se guardan en la variable.
    var nombre = $("#inputName").val()
    var correo = $("#inputEmail").val()
    var asunto = $("#inputSubject").val()
    var mensaje = $("#inputTextarea").val()

    // Se crea un JSON con los datos que extraímos del formulario
    var datos = {
        "nombre":nombre,
        "correo":correo,
        "asunto":asunto,
        "mensaje":mensaje
    }

    // Se envían los datos por POST al controlador obtenerProductos.ajax.php
    $.ajax({
        type:"POST",
        url:"vista/assets/js/ajax/obtenerProductos.ajax.php",
        data:datos,
        // Se obtiene la respuesta del controlador y se parsea para que el JSON lo convierta en un objeto
        success:function(respuesta){
            console.log(respuesta)
            var _respuesta = JSON.parse(respuesta);
            if(_respuesta.response == "error"){

            } else {

            }
        }
    })

})