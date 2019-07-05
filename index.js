//Index


function Main(){
  //Reset sizing
  document.getElementById("Display").style.width = window.innerWidth;
  document.getElementById("Display").style.height = window.innerHeight;

  //Set Specific values
  document.getElementById("LeftSide").style.width = "60%";
  document.getElementById("LeftSide").style.left = "-2000px";
  document.getElementById("RightSide").style.width = "100%";

  //Build Menu
  BuildMenu();


  //build main button
  let Button = document.getElementById("MenuButton");

  //Build event
  Button.onclick = function(){
    //Vars
    let LeftSide = document.getElementById("LeftSide");

    //Push it into view
    if(document.getElementById("LeftSide").style.left == "-2000px"){

      document.getElementById("LeftSide").style.left = "0px";

    }
    //Push it out of view
    else{
      document.getElementById("LeftSide").style.left = "-2000px";;
    }

  }

}

document.addEventListener("DOMContentLoaded", function(){

  Main();
  window.onresize = function(){
    document.getElementById("Display").style.height = "100%";
    document.getElementById("Display").style.width  = "100%";
  }


});
