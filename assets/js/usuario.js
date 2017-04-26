/////*************************creando el objeto************/
var pinBoard1=new pinBoard();
var contador=0;
function pinBoard(){
  this.array=[];
  this.contador=0;
  this.crearPin= function(recurso){
    this.array.push({
      id:this.contador,
      recurso:recurso
    });
    this.contador++;
  }
  this.pines=function functionName(parent) {
    parent.innerHTML="";
    this.array.forEach(function(elemento){
      parent.appendChild(this.publicaPin(elemento.recurso,elemento.id));
    },this);

    }
    this.publicaPin=function(recurso){
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
eliminar.setAttribute("href", "#");
eliminar.addEventListener('click', function(e) {
    alert("Esta seguro de eliminar la publicacion");
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
    for (i = 0; file = files[i]; i += 1) {
          if (file.type.match(/image.*/)) {
            reader = new FileReader();
            reader.onload = function(e2) {
/*codigo de mi objeto*/
var contentPin=document.getElementById("dropZone");
pinBoard1.crearPin(e2.target.result);
pinBoard1.pines(contentPin);
contador++;


            };

            reader.readAsDataURL(file);
        }
    }
});
