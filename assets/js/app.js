
function myFunction(e) {
    "use strict";
    var x = e.clientX,
        y = e.clientY;

    if (x > 1021) {
        document.getElementsByClassName("menu")[0].style.width = "19em";
    } else if (x < 1021) {
        document.getElementsByClassName("menu")[0].style.width = "1.5em";
    }
}

document.getElementsByClassName("nav-options")[3].addEventListener("click",function(e){
  e.preventDefault();
  document.getElementsByClassName("tooltip")[0].classList.toggle("mostrar");
});
