//Index

window.Button = {

  "ColorLevel" : 0.8,
  "Elem" : null
}

window.AnimationLoop = null;

function IncreaseColour(){

  if(window.Button.ColorLevel >= 0.8){
    try {clearInterval(window.AnimationLoop);}
    catch(e){
      console.log(e);
    }


  }else{

    window.Button.ColorLevel += 0.25;

    window.Button.Elem.style.fill = "rgba(255, 255, 255, " + window.Button.ColorLevel + ")";

  }



}
function DecreaseColour(){

  if(window.Button.ColorLevel <= 0.2){

    try {clearInterval(window.AnimationLoop);}
    catch(e){
      console.log(e);
    }




  }else{

    window.Button.ColorLevel -= 0.25;

    window.Button.Elem.style.fill = "rgba(255, 255, 255, " + window.Button.ColorLevel + ")";

  }





}


function Main(){


  //Add hover event
  var Button = document.getElementById("HomeButton-MainButton-Circle");
  window.Button.Elem = Button;
  Button.onclick =  function(){
    console.log("--Mouse down");

    var Button = document.getElementById("HomeButton-MainButton-Circle");


    if(window.Button.ColorLevel >= 0.8){
      try {clearInterval(window.AnimationLoop);}
      catch(e){}

      window.AnimationLoop = setInterval(DecreaseColour, 60);

    }

    if(window.Button.ColorLevel <= 0.2){

      try {clearInterval(window.AnimationLoop);}
      catch(e){}

      window.AnimationLoop = setInterval(IncreaseColour, 60);



    }



  }

}



document.addEventListener("DOMContentLoaded", function(){

  Main();


});
