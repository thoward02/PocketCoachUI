//Index


function Main(){
  //Reset sizing
  document.getElementById("Display").style.width = window.innerWidth;
  document.getElementById("Display").style.height = window.innerHeight;

  //Set Specific values
  document.getElementById("LeftSide").style.width = "0%";
  document.getElementById("RightSide").style.width = "100%";


  //build main button
  let Button = document.getElementById("MenuButton");

  //Build event
  Button.onclick = function(){
    //Vars
    let LeftSide = document.getElementById("LeftSide");

    if(LeftSide.style.width != "40%"){
      document.getElementById("LeftSide").style.width = "40%";
      document.getElementById("TopBar").style.height = "5%";
      document.getElementById("RightSide").style.width = "100%";

    }else{
      document.getElementById("LeftSide").style.width = "0%";
      document.getElementById("TopBar").style.height = "5%";
      document.getElementById("RightSide").style.width = "100%";

    }

  }

}

document.addEventListener("DOMContentLoaded", function(){

  Main();


});
