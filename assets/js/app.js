function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    if(x>1021){
      document.getElementsByClassName("menu")[0].style.width="19em";
    }else if(x<1021){
      document.getElementsByClassName("menu")[0].style.width="1.5em";
    }

}
