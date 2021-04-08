const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const inputSubject = document.querySelector("#inputSubject");
const inputTextarea = document.querySelector("#inputTextarea");
const contactForm = document.querySelector("#contact-form");
const listP = document.querySelector("#warning");
const answers = [];

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    
    answers.push(inputName.value);
    
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!regexEmail.test(inputEmail.value)){
        return alert("Ingresa un correo válido");
    } else{
        answers.push(inputEmail.value);
    }

    answers.push(inputSubject.value);
    answers.push(inputTextarea.value);

    console.log(answers);
    localStorage.setItem("formularioContacto", JSON.stringify(answers));
    
    contactForm.reset();
    
    sayThanks();
    setTimeout(deleteThanks,10000);
});

const sayThanks = function() {
    thanks = document.createElement("p");
    thanks.textContent = `Gracias, tu mensaje se ha enviado con éxito. Nos pondremos en contacto contigo en cuanto antes.`;
    thanks.setAttribute("class","warning");
    listP.appendChild(thanks);
}

const deleteThanks = function() {
    listP.remove("p");
}