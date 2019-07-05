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

      //Replace left side
      document.getElementById("LeftSide").style.left = "0px";

      //Create black elem
      let Black = document.createElement("div");
      document.getElementById("AppHolder").appendChild(Black);
      Black.id = "AppHolder-BlackBox";

      //Stylize
      Black.style.width = "100%";
      Black.style.height = "100%";
      Black.style.position = "absolute";
      Black.style.top = "0";
      Black.style.float = "left";
      Black.style.backgroundColor = "rgba(0,0,0,0.5)";

      //Make closing function
      Black.onclick = function(){
        document.getElementById("LeftSide").style.left = "-2000px";
        document.getElementById("AppHolder").removeChild(document.getElementById("AppHolder-BlackBox"));

      }


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
