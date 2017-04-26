/*global document, FileReader*/

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