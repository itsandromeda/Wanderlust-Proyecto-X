/*global document, FileReader*/
////////*****   evento*********//////////////////////

var navegador=document.getElementsByClassName("nav-options");

navegador[0].addEventListener("mouseover", function(e){
navegador[0].style.color="#fff";
navegador[0].style.fontweight=100;
navegador[0].style.background="#2A3133";
navegador[0].style.padding="14px 50px";

});
navegador[0].addEventListener("mouseout", function(e){
  navegador[0].style.color="#2A3133";
  navegador[0].style.background="#fff";
  navegador[0].style.padding="2px 50px";
  navegador[0].style.fontweight=600;  });

  navegador[1].addEventListener("mouseover", function(e){
  navegador[1].style.color="#fff";
  navegador[1].style.fontweight=100;
  navegador[1].style.background="#2A3133";
  navegador[1].style.padding="14px 50px";

  });
  navegador[1].addEventListener("mouseout", function(e){
    navegador[1].style.color="#2A3133";
    navegador[1].style.background="#fff";
    navegador[1].style.padding="2px 50px";
    navegador[1].style.fontweight=600;  });

    navegador[2].addEventListener("mouseover", function(e){
    navegador[2].style.color="#fff";
    navegador[2].style.fontweight=100;
    navegador[2].style.background="#2A3133";
    navegador[2].style.padding="14px 50px";

    });
    navegador[2].addEventListener("mouseout", function(e){
      navegador[2].style.color="#2A3133";
      navegador[2].style.background="#fff";
      navegador[2].style.padding="2px 50px";
      navegador[2].style.fontweight=600;  });

      navegador[3].addEventListener("mouseover", function(e){
      navegador[3].style.color="#fff";
      navegador[3].style.fontweight=100;
      navegador[3].style.background="#2A3133";
      navegador[3].style.padding="14px 50px";

      });
      navegador[3].addEventListener("mouseout", function(e){
        navegador[3].style.color="#2A3133";
        navegador[3].style.background="#fff";
        navegador[3].style.padding="2px 50px";
        navegador[3].style.fontweight=600;  });



/*TOOLTIP*/
document.getElementsByClassName("nav-options")[3].addEventListener("click", function () {
    "use strict";
    document.getElementsByClassName("tooltip")[0].classList.toggle("show");
});

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

    function makeVideo(e) {
        var container = document.createElement("div"),
            video = document.createElement("video"),
            source = document.createElement('source'),
            span = document.createElement("span"),
            type = document.createElement("div");

        container.setAttribute("class", "video-container");
        type.classList.add("circle");
        type.classList.add("videos");
        video.setAttribute("controls", "");
        source.src = e.target.result;
        span.classList.add("fa");
        span.classList.add("fa-heart-o");
        video.appendChild(source);
        container.appendChild(video);
        container.appendChild(span);
        container.appendChild(type);
        dropZone.appendChild(container);
    }

    function makeImage(e) {
        var container = document.createElement("figure"),
            img = document.createElement('img'),
            span = document.createElement("span"),
            type = document.createElement("div");

        container.setAttribute("class", "image-container");
        type.classList.add("circle");
        type.classList.add("images");
        img.src = e.target.result;
        span.classList.add("fa");
        span.classList.add("fa-heart-o");
        container.appendChild(img);
        container.appendChild(span);
        container.appendChild(type);
        dropZone.appendChild(container);
    }

    for (i = 0; e.dataTransfer.files[i]; i += 1) {
        if (e.dataTransfer.files[i].type.match('video.*')) {
            reader = new FileReader();
            reader.onload = makeVideo;
            reader.readAsDataURL(e.dataTransfer.files[i]);
        } else if (e.dataTransfer.files[i].type.match('image.*')) {
            reader = new FileReader();
            reader.onload = makeImage;
            reader.readAsDataURL(e.dataTransfer.files[i]);
        }
    }
});
