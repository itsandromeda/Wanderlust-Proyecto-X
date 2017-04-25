/*global document*/

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