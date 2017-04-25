var dropZone = document.getElementById('dropZone');

// Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
dropZone.addEventListener('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

// Get file data on drop
dropZone.addEventListener('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();
    var files = e.dataTransfer.files; // Array of all files

    for (var i = 0, file; file = files[i]; i++) {
        if (file.type.match(/video.*/)) {
            var reader = new FileReader();

            reader.onload = function(e2) {
                var contenedor = document.createElement("video");
                contenedor.setAttribute("controls","");
                contenedor.setAttribute("class", "mi-contenedor-video");
                var img = document.createElement('source');
                img.setAttribute("class","imagen");
                img.src = e2.target.result;
                var myCaption = document.createElement("nav");
                myCaption.setAttribute("class", "heart");
                contenedor.appendChild(img);
                contenedor.appendChild(myCaption);
                dropZone.appendChild(contenedor);

            }

            reader.readAsDataURL(file); // start reading the file data.
        }

        if (file.type.match(/image.*/)) {
            var reader = new FileReader();

            reader.onload = function(e2) {
                // finished reading file data.
                var contenedor = document.createElement("figure");
                contenedor.setAttribute("class", "mi-contenedor-imagen");
                var img = document.createElement('img');
                img.setAttribute("class","imagen");
                img.src = e2.target.result;
                var myCaption = document.createElement("figcaption");
                myCaption.setAttribute("class", "heart");
                contenedor.appendChild(img);
                contenedor.appendChild(myCaption);
                dropZone.appendChild(contenedor);

            }

            reader.readAsDataURL(file); // start reading the file data.
        }
    }
});
