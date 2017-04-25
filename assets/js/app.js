/*global document*/

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