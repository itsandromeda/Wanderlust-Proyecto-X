/*global document, FileReader*/

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

document.getElementsByClassName("nav-options")[3].addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementsByClassName("tooltip")[0].classList.toggle("mostrar");
});

/*DROPZONE*/
var dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', function(e) {
    "use strict";
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

dropZone.addEventListener('drop', function(e) {
    "use strict";
    e.stopPropagation();
    e.preventDefault();
    var files = e.dataTransfer.files,
        i,
        file,
        reader;

    for (i = 0; file = files[i]; i += 1) {
        if (file.type.match(/video.*/)) {
            reader = new FileReader();

            reader.onload = function(e2) {
                var contenedor = document.createElement("div"),
                    video = document.createElement("video"),
                    img = document.createElement('source'),
                    myCaption = document.createElement("span"),
                    type = document.createElement("div");

                contenedor.setAttribute("class", "mi-contenedor-video");
                type.classList.add("circle");
                type.classList.add("videos");
                video.setAttribute("controls", "");
                img.setAttribute("class", "imagen");
                img.src = e2.target.result;

                myCaption.classList.add("fa");
                myCaption.classList.add("fa-heart-o");
                video.appendChild(img);
                contenedor.appendChild(video);
                contenedor.appendChild(myCaption);
                contenedor.appendChild(type);
                dropZone.appendChild(contenedor);
            };

            reader.readAsDataURL(file);
        }

        if (file.type.match(/image.*/)) {
            reader = new FileReader();

            reader.onload = function(e2) {
                var contenedor = document.createElement("figure"),
                    img = document.createElement('img'),
                    myCaption = document.createElement("span"),
                    type = document.createElement("div");

                contenedor.setAttribute("class", "mi-contenedor-imagen");
                type.classList.add("circle");
                type.classList.add("images");
                img.setAttribute("class", "imagen");
                img.src = e2.target.result;
                myCaption.classList.add("fa");
                myCaption.classList.add("fa-heart-o");
                contenedor.appendChild(img);
                contenedor.appendChild(myCaption);
                contenedor.appendChild(type);
                dropZone.appendChild(contenedor);
            };

            reader.readAsDataURL(file);
        }
    }
});
