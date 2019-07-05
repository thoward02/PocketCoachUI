//Index


function Main(){
  //Reset sizing
  document.getElementById("Display").style.width = window.innerWidth;
  document.getElementById("Display").style.height = window.innerHeight;

  //Set Specific values
  document.getElementById("LeftSide").style.width = "0%";
  document.getElementById("RightSide").style.width = "100%";

  //Build Menu
  BuildMenu();


  //build main button
  let Button = document.getElementById("MenuButton");

  //Build event
  Button.onclick = function(){
    //Vars
    let LeftSide = document.getElementById("LeftSide");

    if(LeftSide.style.width != "60%"){
      document.getElementById("MenuButton").style.paddingLeft = "60%";
      document.getElementById("LeftSide").style.width = "60%";
      document.getElementById("RightSide").style.width = "100%";

    }else{
      document.getElementById("MenuButton").style.paddingLeft = "0%";
      document.getElementById("LeftSide").style.width = "0%";
      document.getElementById("RightSide").style.width = "100%";

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
