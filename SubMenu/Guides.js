
class MenuBlock{
  /**
  * Title, Picture and Description
  * OnClick -> That Page
  **/


  constructor(Title){
    this.Title          = Title;


    this.Elem           = document.createElement("div");
    this.Elem.innerHTML = this.Title;



    this.Style();
  }

    Style(){
      //When first build, set the display to hidden
      this.Elem.style.display    = "block";
      this.Elem.style.fontFamily = "Montserrat";
      this.Elem.style.fontWeight = "500";
      this.Elem.style.color      = "#D5FFF9";
      this.Elem.style.textAlign  = "center";


    }
}


//Load Guides
window.LoadMaps = function(){

  //Reset title
  document.getElementById("Title").innerHTML = "Maps";

  //Reset Data inside of app
  document.getElementById("DataHolder").innerHTML = "";

  //Remove black, and reset view
  document.getElementById("AppHolder-BlackBox").onclick();

  //Start adding new data into view
  let MapData = window.Data.Guides.Maps.MapTypes;

  for(var items in MapData) {
    let Block = new MenuBlock(items);
    document.getElementById("DataHolder").appendChild(Block.Elem);
  }



}

window.LoadHeroes = function(){

  document.getElementById("Title").innerHTML = "Heroes";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let HeroData = window.Data.Guides.Heroes.HeroTypes;

  for(var items in HeroData){
    let Block = new MenuBlock(items);
    document.getElementById("DataHolder").appendChild(Block.Elem);
  }
}

window.LoadTeamComps = function(){

  document.getElementById("Title").innerHTML = "TeamComps";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let TeamCompData = window.Data.Guides.TeamComps.Comps;

  for(var items in TeamCompData){
    let Block = new MenuBlock(items);
    document.getElementById("DataHolder").appendChild(Block.Elem);
  }
}
