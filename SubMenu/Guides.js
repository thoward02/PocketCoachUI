
class MenuBlock{
  /**
  * Title, Picture and Description
  * OnClick -> That Page
  **/


  constructor(Title){
    this.Title            = Title;

    this.Elem             = document.createElement("div");

    this.Picture          = document.createElement("img");
    this.Header           = document.createElement("div");
    this.Description      = document.createElement("div");

    this.Header.innerHTML = this.Title;
    this.Picture.src      = "./Resources/OWMaps/Hanamura.jfif"

    //Append
    this.Elem.appendChild(this.Picture);
    this.Elem.appendChild(this.Header);
    this.Elem.appendChild(this.Description);


    this.Style();
  }

    Style(){
      //Setup elems
      this.Elem.style.height      = "10%";
      this.Elem.style.width       = "80%";
      this.Elem.style.marginLeft  = "10%";
      this.Elem.style.marginTop   = "10%";

      this.Elem.style.display     = "block";
      this.Elem.style.textAlign   = "center";
      this.Elem.style.overflowY   = "hidden";
      this.Elem.style.border      = "none";

      this.Elem.style.fontFamily  = "Montserrat";
      this.Elem.style.fontWeight  = "500";

      this.Elem.style.color       = "#D5FFF9";
    //  this.Elem.style.background  = "linear-gradient(to right, rgba(63, 30, 97, 1), rgba(86, 168, 160, 0.1))";

      this.Elem.style.borderRadius = "20px";

      //Setup picture
      this.Picture.style.width      = "30%";
      this.Picture.style.height     = "100%";

      this.Picture.style.float      = "left";
      this.Picture.style.margin     = "0";
      this.Picture.style.padding    = "0";


      //Setup Header
      this.Header.style.textAlign   = "left";
      this.Header.style.marginLeft  = "32%";


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
