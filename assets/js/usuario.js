var usuarios = [{
        nombre: "Leidy",
        correo: "ross@lab.es",
        contraseña: "123",
        source: "../assets/images/gabriella_ram.jpg"
    },
    {
        nombre: "Annia",
        correo: "itsandromeda@gmail.com",
        contraseña: "321",
        source: "assets/images/annia.jpg"
    },
    {
        nombre: "Ruth",
        correo: "ruth@lab.es",
        contraseña: "456"
    },
    {
        nombre: "Gladys",
        correo: "gla@lab.es",
        contraseña: "789"
    },
    {
        nombre: "Vanny",
        correo: "va@lab.es",
        contraseña: "1011"
    },
    {
        nombre: "Flor",
        correo: "flor@lab.es",
        contraseña: "1012"
    }];
var correo = document.getElementById("username");
var pass = document.getElementById("pw");

localStorage.setItem("user", JSON.stringify(usuarios));
document.getElementById("sign-in").addEventListener("click", function () {
    myUser = JSON.parse(localStorage.getItem("user"));
    var autentica = myUser.filter(function (elemento) {
        return elemento.correo == correo.value;
    })[0];

    localStorage.setItem("autentica", autentica.nombre);
    var recursoFoto = autentica.source;
    if (autentica != null) {
        if (autentica.correo == correo.value && autentica.contraseña == pass.value) {
            window.location = "index.html";
        } else {
            alert("La contraseña es incorrecta");
        }
    } else {
        alert("El usuario no esta autorizado");
    }
});