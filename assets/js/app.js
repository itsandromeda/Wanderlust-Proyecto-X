/*global document, FileReader, PinBoard, localStorage*/

window.addEventListener('load', function () {
    "use strict";
    var user = localStorage.getItem("autentica"),
        userSpan;

    if (user === null) {
        window.location = "usuario.html";
    }
});

/*TOOLTIP*/
document.getElementsByClassName("nav-options")[3].addEventListener("click", function () {
    "use strict";
    document.getElementsByClassName("tooltip")[0].classList.toggle("show");
});

/*HEADER*/
document.getElementsByClassName("nav-options").onmouseover = function (e) {
    "use strict";
};

/*SIDE MENU*/
document.getElementById("destination").onmousemove = function (e) {
    "use strict";
    var x = e.clientX,
        y = e.clientY;

    if (x > 1100) {
        document.getElementsByClassName("menu")[0].style.width = "200px";
    } else if (x < 1021) {
        document.getElementsByClassName("menu")[0].style.width = "0";
    }
};

var select = document.getElementsByClassName("option"),
    i;

var background = function () {
    "use strict";
    var element = this.name;

    document.getElementsByClassName("wrapper")[0].style.background = "url(assets/images/" + element + ".jpg";

    for (i = 0; i < select.length; i += 1) {
        document.getElementsByClassName("destination-details")[i].style.display = "none";
    }
    document.getElementById(element).style.display = "inline-block";
};

for (i = 0; i < select.length; i += 1) {
    select[i].addEventListener('click', background);
}

/*REACTIONS*/
document.getElementById("heart").addEventListener('click', function () {
    "use strict";
    document.getElementById("heart").style.visibility = "hidden";
    document.getElementById("unheart").style.visibility = "visible";
});

document.getElementById("unheart").addEventListener('click', function () {
    "use strict";
    document.getElementById("heart").style.visibility = "visible";
    document.getElementById("unheart").style.visibility = "hidden";
});

/*LOCAL STORAGE*/
var usuarioActual = localStorage.getItem("autentica");
var nameUser = document.getElementById("usuario");
var contentPin = document.getElementById("dropZone");
nameUser.innerHTML = usuarioActual;

var pinBoard1 = new PinBoard();
var contador = 0;

function PinBoard() {
    "use strict";
    this.array = [];
    this.arrayVideo = [];
    this.contador = 0;
    this.contadorVideo = 0;
    this.crearPin = function (recurso) {
        this.array.push({
            id: this.contador,
            recurso: recurso
        });
        this.contador += 1;
    };

    this.crearPinVideo = function (recurso) {
        this.arrayVideo.push({
            id: this.contador,
            recurso: recurso
        });
        this.contadorVideo += 1;
    };

    this.pines = function functionName(parent) {
        parent.innerHTML = "";
        this.array.forEach(function (elemento) {
            parent.appendChild(this.publicaPin(elemento.recurso, elemento.id));
        }, this);
    };

    this.pinesVideo = function functionName(parent) {
        this.arrayVideo.forEach(function (elemento) {
            parent.appendChild(this.publicaPinVideo(elemento.recurso, elemento.id));
        }, this);

    };

    this.publicaPin = function (recurso) {
        var contenedor = document.createElement("figure"),
            img = document.createElement('img'),
            myCaption = document.createElement("span"),
            type = document.createElement("div"),
            eliminar;

        contenedor.setAttribute("class", "image-container");
        type.classList.add("circle");
        type.classList.add("images");
        img.setAttribute("class", "imagen");
        img.src = recurso;
        myCaption.classList.add("fa");
        myCaption.classList.add("fa-heart-o");

        eliminar = document.createElement("i");
        eliminar.classList.add("fa");
        eliminar.classList.add("fa-trash");
        eliminar.addEventListener('click', function (e) {
            if (contenedor.parentNode) {
                contenedor.parentNode.removeChild(contenedor);
            }
            var postId = e.target.parentNode.getAttribute('data-id');
            pinBoard1.array.splice(postId, 1);
        });
        contenedor.appendChild(eliminar);
        contenedor.appendChild(img);
        contenedor.appendChild(myCaption);
        contenedor.appendChild(type);
        return contenedor;
    };

    this.publicaPinVideo = function (recurso) {
        var contenedor = document.createElement("div"),
            video = document.createElement("video"),
            img = document.createElement('source'),
            myCaption = document.createElement("span"),
            type = document.createElement("div"),
            eliminar;

        contenedor.setAttribute("class", "video-container");
        type.classList.add("circle");
        type.classList.add("videos");
        video.setAttribute("controls", "");
        img.setAttribute("class", "imagen");
        img.src = recurso;
        eliminar = document.createElement("i");
        eliminar.classList.add("fa");
        eliminar.classList.add("fa-trash");
        eliminar.addEventListener('click', function (e) {
            if (contenedor.parentNode) {
                contenedor.parentNode.removeChild(contenedor);
            }
            var postId = e.target.parentNode.getAttribute('data-id');
            pinBoard1.array.splice(postId, 1);
        });

        myCaption.classList.add("fa");
        myCaption.classList.add("fa-heart-o");
        video.appendChild(img);
        contenedor.appendChild(eliminar);
        contenedor.appendChild(video);
        contenedor.appendChild(myCaption);
        contenedor.appendChild(type);
        return contenedor;
    };
}

function myFunction(e) {
    "use strict";
    var x = e.clientX,
        y = e.clientY;

    if (x > 1021) {
        document.getElementsByClassName("menu")[0].style.width = "170px";
    } else if (x < 1021) {
        document.getElementsByClassName("menu")[0].style.width = "0";
    }
}

document.getElementsByClassName("nav-options")[3].addEventListener("click", function (e) {
    "use strict";
    e.preventDefault();
    document.getElementsByClassName("tooltip")[0].classList.toggle("mostrar");
});

/*DROPZONE*/
var dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', function (e) {
    "use strict";
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

dropZone.addEventListener('drop', function (e) {
    "use strict";
    e.stopPropagation();
    e.preventDefault();
    var i,
        reader;

    for (i = 0; e.dataTransfer.files[i]; i += 1) {
        if (e.dataTransfer.files[i].type.match("image.*")) {
            reader = new FileReader();
            reader.onload = function (e) {
                pinBoard1.crearPin(e.target.result);
                pinBoard1.pines(contentPin);
                pinBoard1.pinesVideo(contentPin);
                contador += 1;
            };
            reader.readAsDataURL(e.dataTransfer.files[i]);
        }
        if (e.dataTransfer.files[i].type.match("video.*")) {
            reader = new FileReader();
            reader.onload = function (e) {
                pinBoard1.crearPinVideo(e.target.result);
                pinBoard1.pines(contentPin);
                pinBoard1.pinesVideo(contentPin);
                contador += 1;
            };
            reader.readAsDataURL(e.dataTransfer.files[i]);
        }
        localStorage.setItem(usuarioActual, JSON.stringify(pinBoard1));
    }
});

var multimedia = document.getElementsByClassName("circle");

multimedia[0].addEventListener("click", function () {
    "use strict";
    contentPin.innerHTML = "";
    pinBoard1.pinesVideo(contentPin);
});

multimedia[1].addEventListener("click", function () {
    "use strict";
    pinBoard1.pines(contentPin);
    pinBoard1.pinesVideo(contentPin);
});

multimedia[2].addEventListener("click", function () {
    "use strict";
    pinBoard1.pines(contentPin);
});