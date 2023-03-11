const nombre = document.querySelector("#modalNombre");
const email = document.querySelector("#modalEmail");
const password = document.querySelector("#modalPass");

function camposVacio() {
    if (nombre.value == "" ||
        email.value == "" ||
        password.value == "") {
        return true;
    } else {
        return false;
    }
}

const formulario = document.querySelector("#formulario");

let alerta = document.querySelector("#alerta");

formulario.addEventListener("submit", e => {
    let registro = document.querySelector("#registro");
    let modal = bootstrap.Modal.getInstance(registro);

    e.preventDefault();
    alerta.classList.remove("d-none");

    if (camposVacio()) {
        alerta.textContent = "Todos los campos son obligatorios";
        alerta.classList.add("alert-danger");

    } else {
        alerta.textContent = "Todo correcto, enviando formulario...";
        alerta.classList.remove("alert-danger");
        alerta.classList.add("alert-success");
        localStorage.setItem("nombre", nombre.value);

        setTimeout(() => {
            modal.hide();
        }, 1000);

        sesionIniciada();
    }

});

function sesionIniciada() {
    const usuario = document.querySelector("#usuario");
    const botonSesion = document.querySelector("#botonSesion");
    const login = document.querySelector("#login");

    usuario.classList.remove("d-none");
    botonSesion.classList.remove("d-none");
    login.classList.add("d-none");

    usuario.textContent = localStorage.getItem("nombre");
}