window.addEventListener('load',function() {
  console.log("corre load");
  pinBoard1.pines(contentPin);
    pinBoard1.pinesVideo(contentPin);
});



        var usuarioActual = localStorage.getItem("autentica");
        var nameUser = document.getElementById("usuario");
            var contentPin = document.getElementById("dropZone");
        nameUser.innerHTML = usuarioActual;

        /////*************************creando el objeto************/
        var pinBoard1 = new pinBoard();
        var contador = 0;

        function pinBoard() {
            this.array = [];
            this.arrayVideo = [];
            this.contador = 0;
            this.contadorVideo = 0;
            this.crearPin = function(recurso) {
                this.array.push({
                    id: this.contador,
                    recurso: recurso
                });
                this.contador++;
            }
            this.crearPinVideo = function(recurso) {
                this.arrayVideo.push({
                    id: this.contador,
                    recurso: recurso
                });
                this.contadorVideo++;
            }


            this.pines = function functionName(parent) {
                parent.innerHTML = "";
                this.array.forEach(function(elemento) {
                    parent.appendChild(this.publicaPin(elemento.recurso, elemento.id));
                }, this);
            }
            this.pinesVideo = function functionName(parent) {
                //parent.innerHTML = "";
                this.arrayVideo.forEach(function(elemento) {
                    parent.appendChild(this.publicaPinVideo(elemento.recurso, elemento.id));
                }, this);

            }
            this.publicaPin = function(recurso) {
                var contenedor = document.createElement("figure"),
                    img = document.createElement('img'),
                    myCaption = document.createElement("span"),
                    type = document.createElement("div");

                contenedor.setAttribute("class", "mi-contenedor-imagen");
                type.classList.add("circle");
                type.classList.add("images");
                img.setAttribute("class", "imagen");
                img.src = recurso; //recurso despues de la igualdad
                myCaption.classList.add("fa");
                myCaption.classList.add("fa-heart-o");

                var eliminar = document.createElement("a");
                eliminar.innerHTML = "Eliminar";
                eliminar.setAttribute("href", "#pinboard");
                eliminar.addEventListener('click', function(e) {

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
            }
            this.publicaPinVideo = function(recurso) {
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
                img.src = recurso;
                var eliminar = document.createElement("a");
                eliminar.innerHTML = "Eliminar";
                eliminar.setAttribute("href", "#pinboard");
                eliminar.addEventListener('click', function(e) {

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

            }

        }





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

            for (var i = 0; file = files[i]; i += 1) {
                if (file.type.match(/image.*/)) {

                    reader = new FileReader();
                    reader.onload = function(e2) {
                        /*codigo de mi objeto*/


                        // pinBoard1.pines(contentPin);
                        // pinBoard1.crearPin(e2.target.result);

                        pinBoard1.crearPin(e2.target.result);
                        //  pinBoard1.crearPinVideo(e2.target.result);
                        pinBoard1.pines(contentPin);
                        pinBoard1.pinesVideo(contentPin);
                        contador++;
                    };
                    reader.readAsDataURL(file);
                }
                if (file.type.match(/video.*/)) {
                    reader = new FileReader();
                    reader.onload = function(e2) {
                        /*codigo de mi objeto*/

                        pinBoard1.crearPinVideo(e2.target.result);
                        pinBoard1.pines(contentPin);
                        pinBoard1.pinesVideo(contentPin);
                        contador++;
                    };
                    reader.readAsDataURL(file);

                }

                //console.log(pinBoard1);
                // debugger;
                localStorage.setItem(usuarioActual, JSON.stringify(pinBoard1));
                //console.log("contenido actual " + JSON.parse(localStorage.getItem(usuarioActual)).array);
              //  console.log("contenido actual " + JSON.stringify(JSON.parse(localStorage.getItem(usuarioActual)).array));
              //  console.log("contenido actual " + JSON.stringify(JSON.parse(localStorage.getItem(usuarioActual)).contador));
            }

        });
        //console.log("contenido actual " + JSON.stringify(JSON.parse(localStorage.getItem(usuarioActual)).array));

    var multimedia=document.getElementsByClassName("circle");
    multimedia[0].addEventListener("click", function(){
contentPin.innerHTML="";
  pinBoard1.pinesVideo(contentPin);
    });

    multimedia[1].addEventListener("click", function(){

        pinBoard1.pines(contentPin);
          pinBoard1.pinesVideo(contentPin);
    });
    multimedia[2].addEventListener("click", function(){
  pinBoard1.pines(contentPin);
    });
