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
    var files = e.dataTransfer.files,
        i,
        file,
        reader;

    for (i = 0; file = files[i]; i += 1) {
        if (file.type.match(/video.*/)) {
            reader = new FileReader();

            reader.onload = function (e2) {
                var contenedor = document.createElement("video"),
                    img = document.createElement('source'),
                    myCaption = document.createElement("nav");
                contenedor.setAttribute("controls", "");
                contenedor.setAttribute("class", "mi-contenedor-video");
                img.setAttribute("class", "imagen");
                img.src = e2.target.result;
                myCaption.setAttribute("class", "heart");
                contenedor.appendChild(img);
                contenedor.appendChild(myCaption);
                dropZone.appendChild(contenedor);
            };

            reader.readAsDataURL(file);
        }

        if (file.type.match(/image.*/)) {
            reader = new FileReader();

            reader.onload = function (e2) {
                var contenedor = document.createElement("figure"),
                    img = document.createElement('img'),
                    myCaption = document.createElement("figcaption");
                contenedor.setAttribute("class", "mi-contenedor-imagen");
                img.setAttribute("class", "imagen");
                img.src = e2.target.result;
                myCaption.setAttribute("class", "heart");
                contenedor.appendChild(img);
                contenedor.appendChild(myCaption);
                dropZone.appendChild(contenedor);
            };

            reader.readAsDataURL(file);
        }
    }
});