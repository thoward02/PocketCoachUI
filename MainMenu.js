//OwO is the new UwU
//Page Loading
window.LoadGuides = function(){
<<<<<<< HEAD
  //Clear previous data
  document.getElementById("Title").innerHTML = "Guides";
  document.getElementById("DataHolder").innerHTML = "";

  //Remove black, and reset view
  document.getElementById("AppHolder-BlackBox").onclick();


  //Start adding new data into view
  let GuideData = window.Maps.Guides;
  console.log(GuideData);


=======
  document.getElementById("Title").innerHTML = "Guides";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();
>>>>>>> 34bb28b61c2bc8651c1a488a87ed47367a864238
}
window.LoadCoaching = function(){
  document.getElementById("Title").innerHTML = "Coaching";
  document.getElementById("DataHolder").innerHTML = "";
<<<<<<< HEAD
  document.getElementById("AppHolder-BlackBox").onclick();
=======

>>>>>>> 34bb28b61c2bc8651c1a488a87ed47367a864238
}
window.LoadQuizzes = function(){
  document.getElementById("Title").innerHTML = "Quizzes";
  document.getElementById("DataHolder").innerHTML = "";
<<<<<<< HEAD
  document.getElementById("AppHolder-BlackBox").onclick();
=======

>>>>>>> 34bb28b61c2bc8651c1a488a87ed47367a864238
}


//Build leftside menu
class MenuButton{

  constructor(Title){
    this.Title = Title;


    this.Elem = document.createElement("div");
    this.Elem.innerHTML = this.Title;

    this.Style();
  }

    Style(){
      //When first build, set the display to hidden
      this.Elem.style.display  = "none";

    }


}


function BuildMenu(){

  let AppMenu = document.getElementById("AppMenu");

  //Menu Data
  window.Menu = {
    "Guides" : {

      "Funct" : window.LoadGuides,
      "Class" : null

    },

    "Coaching" : {

      "Funct" : window.LoadCoaching,
      "Class" : null


    },
    "Quizzes" : {

        "Funct" : window.LoadQuizzes,
        "Class" : null

    }
  }

  //Build menu items
  for(var item in window.Menu){
    //Load item into menu
    let Block = new MenuButton(item);
    Block.Elem.onclick = window.Menu[item].Funct;
    window.Menu[item].Class = Block;


    //Append item
    AppMenu.appendChild(Block.Elem);

    new ResizeObserver(function(){
      if( (document.getElementById("LeftSide").style.width == "60%")  &&  Block.Elem.style.display  == "none"){
        Block.Elem.style.display  = "block";
      }else{
        Block.Elem.style.display  = "none";
      }

      Block.Elem.style.width =  "80%";
      Block.Elem.style.height = "10%";

    }).observe(document.getElementById("LeftSide"));

  }

  //Build Resizing






}
