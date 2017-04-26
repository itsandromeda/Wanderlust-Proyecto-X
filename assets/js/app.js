/*global document, FileReader*/

/*TOOLTIP*/
document.getElementsByClassName("nav-options")[3].addEventListener("click", function () {
    "use strict";
    document.getElementsByClassName("tooltip")[0].classList.toggle("show");
});

/*HEADER*/
document.getElementsByClassName("nav-options").onmousemove = function (e) {
    "use strict";
    console.log("hi");
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
            type = document.createElement("div"),
            trash = document.createElement("span");

        container.setAttribute("class", "video-container");
        type.classList.add("circle");
        type.classList.add("videos");
        video.setAttribute("controls", "");
        trash.classList.add("fa");
        trash.classList.add("fa-trash");
        trash.addEventListener('click', function (e) {
            var parentSpan = e.target.parentNode;
            container.parentNode.removeChild(container);
        });

        source.src = e.target.result;
        span.classList.add("fa");
        span.classList.add("fa-heart-o");
        video.appendChild(source);
        container.appendChild(video);
        container.appendChild(span);
        container.appendChild(type);
        container.appendChild(trash);
        dropZone.appendChild(container);
    }

    function makeImage(e) {
        var container = document.createElement("figure"),
            img = document.createElement('img'),
            span = document.createElement("span"),
            type = document.createElement("div"),
            trash = document.createElement("span");

        container.setAttribute("class", "image-container");
        type.classList.add("circle");
        type.classList.add("images");
        trash.classList.add("fa");
        trash.classList.add("fa-trash");
        trash.addEventListener('click', function (e) {
            var parentSpan = e.target.parentNode;
            container.parentNode.removeChild(container);
        });

        img.src = e.target.result;
        span.classList.add("fa");
        span.classList.add("fa-heart-o");
        container.appendChild(img);
        container.appendChild(span);
        container.appendChild(type);
        container.appendChild(trash);
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