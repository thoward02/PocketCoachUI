//Page Loading
window.LoadGuides = function(){}
window.LoadCoaching = function(){}
window.LoadQuizes = function(){}



//Build leftside menu
class MenuButton{

  constructor(Title, Function){
    this.Title = Title;
    this.Function = Function;


    this.Elem = document.createElement("div");
    this.Elem.innerHTML = this.Title;
    this.Elem.onclick = this.Function;

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

      "Funct" : window.LoadGuides(),
      "Class" : null

    },
    "Coaching" : {

      "Funct" : window.LoadGuides(),
      "Class" : null


    },
    "Quizes" : {

        "Funct" : window.LoadGuides(),
        "Class" : null

    },
  }

  //Build menu items
  for(var item in window.Menu){
    //Load item into menu
    let Block = new MenuButton(item, window.Menu[item].function);
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
