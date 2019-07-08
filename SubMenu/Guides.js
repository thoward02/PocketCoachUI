class MenuBlock{
  /**
  * Title, Picture and Description
  * OnClick -> That Page
  **/


  constructor(Title, DataBlock){
    this.Title                 = Title;
    this.DescText              = DataBlock.Description;
    this.ImageSrc              = DataBlock.Image

    let TitleText = this.Title.replace(/_/g, " ");
    this.Title = TitleText;

    //Modify text
    let NewText = "";
    for(var x = 0; x < 68; x++){
      if(this.DescText[x] != null)
        NewText += this.DescText[x];
    }
    NewText += " . . .";

    this.DescText = NewText;

    this.Elem                  = document.createElement("div");

    this.Picture               = document.createElement("img");
    this.Header                = document.createElement("div");
    this.Description           = document.createElement("div");

    this.Elem.id               = this.Title;
    this.Header.innerHTML      = this.Title;
    this.Description.innerHTML = this.DescText;
    this.Picture.src           = this.ImageSrc;

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
      //this.Elem.style.background  = "linear-gradient(to right, rgba(63, 30, 97, 1), rgba(86, 168, 160, 0.1))";

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

      //Setup Description
      this.Description.style.textAlign   = "left";
      this.Description.style.fontWeight = "200";
      this.Description.style.fontSize = "30px";

      this.Description.style.marginLeft  = "32%";

    }
}

class PageBlock{

  constructor(Title, DataBlock){

    this.Title                 = Title;
    this.DescText              = DataBlock.Description;
    let TitleText = this.Title.replace(/_/g, " ");
    this.Title = TitleText;

      this.Elem                  = document.createElement("div");
  }


  Style(){


  }


}

//Load Guides
window.LoadMaps = function(){
  window.MapTypeData = {
    "Hybrid" : {
      "Funct" : window.LoadHybrid,
      "Class" : null,
      "SubMaps" : {
        "Blizzard_World" : {

        },
        "Eichenwalde" : {

        },
        "Hollywood" : {

        },
        "Kings_Row" : {


        },
        "Numbani" : {

        }

      }
    },
    "Payload" : {
      "Funct" : window.LoadHybrid,
      "Class" : null,
      "SubMaps" : {
        "Blizzard_World" : {

        },
        "Eichenwalde" : {

        },
        "Hollywood" : {

        },
        "Kings_Row" : {

        },
        "Numbani" : {

        }

      }
    },
    "ControlPoint" : {
      "Funct" : window.LoadHybrid,
      "Class" : null,
      "SubMaps" : {
        "Blizzard_World" : {


        },
        "Eichenwalde" : {

          "Class" : null
        },
        "Hollywood" : {
        },
        "Kings_Row" : {

        },
        "Numbani" : {

        }

      }
    },
    "CP2" : {
      "Funct" : window.LoadHybrid,
      "Class" : null,
      "SubMaps" : {
        "Blizzard_World" : {

        },
        "Eichenwalde" : {

        },
        "Hollywood" : {

        },
        "Kings_Row" : {


        },
        "Numbani" : {

        }

      }
    },


  }

  //Reset title
  document.getElementById("Title").innerHTML = "Maps";

  //Reset Data inside of app
  document.getElementById("DataHolder").innerHTML = "";

  //Remove black, and reset view
  document.getElementById("AppHolder-BlackBox").onclick();

  //Start adding new data into view
  let MapData = window.Data.Guides.Maps.MapTypes;

  for(var items in MapData) {
    let Block = new MenuBlock(items, MapData[items]);
    Block.Elem.onclick = MapTypeData[items].Funct;
    document.getElementById("DataHolder").appendChild(Block.Elem);

  }



}

window.LoadHeroes = function(){

  window.HeroTypeData = {
    "DPS" : {},
    "MainSupport" : {},
    "OffSupport" : {},
    "MainTank" : {},
    "OffTank" : {},


  }

  document.getElementById("Title").innerHTML = "Heroes";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let HeroData = window.Data.Guides.Heroes.HeroTypes;

  for(var items in HeroData){
    let Block = new MenuBlock(items, HeroData[items]);
    document.getElementById("DataHolder").appendChild(Block.Elem);
  }
}

window.LoadTeamComps = function(){

  document.getElementById("Title").innerHTML = "TeamComps";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let TeamCompData = window.Data.Guides.TeamComps.Comps;

  for(var items in TeamCompData){
    let Block = new MenuBlock(items, TeamCompData[items]);
    document.getElementById("DataHolder").appendChild(Block.Elem);;
  }
}








//LOAD Sub menus

// -------------- MAP TYPES ---------------- //
window.LoadHybrid   = function(){
  document.getElementById("Title").innerHTML = "Hybrid";
  document.getElementById("DataHolder").innerHTML = "";

  let HybridData = window.Data.Guides.Maps.MapTypes.Hybrid.Maps;


  for(var items in HybridData) {
    window.localStorage.setItem("Button", 0);
    let Block = new MenuBlock(items, HybridData[items]);

    Block.Elem.onclick = function(x){window.LoadMapPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);

  }

}
window.LoadPayload  = function(){

  document.getElementById("Title").innerHTML = "Payload";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let PayloadData = window.Data.Guides.Maps.MapTypes.Payload.Maps;

  for(var items in PayloadData) {
    let Block = new MenuBlock(items, PayloadData[items]);
    Block.Elem.onclick = PayloadData[items].Funct;
    document.getElementById("DataHolder").appendChild(Block.Elem);

  }
}

window.LoadCP       = function(){

  document.getElementById("Title").innerHTML = "CP";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let CPData = window.Data.Guides.Maps.MapTypes.CP.Maps;

  for(var items in CPData) {
    let Block = new MenuBlock(items, CPData[items]);
    Block.Elem.onclick = CPData[items].Funct;
    document.getElementById("DataHolder").appendChild(Block.Elem);

  }

}
window.Load2CP      = function(){

  document.getElementById("Title").innerHTML = "2CP";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let CP2Data = window.Data.Guides.Maps.MapTypes.CP2.Maps;

  for(var items in CP2Data) {
    let Block = new MenuBlock(items, CP2Data[items]);
    Block.Elem.onclick = window.MapTypeData[items].Funct;
    document.getElementById("DataHolder").appendChild(Block.Elem);

  }

}

// ----------------------------------------- //


// -------------- HERO TYPES ----------------//

window.LoadDPS      = function(){

}
// ----------------------------------------- //




//LOAD PAGES
window.LoadMapPage  = function(Map){
  //BUILD PAGE BASED OFF OF MAP PARAM
  // MAP -> maps.js -> maps.Guides.Maps.MapList.Maps[Map]
  //Will return the guide, we'll build the guide here


  //To ensure that only map data is built
  if(Map != "DataHolder"){
    //Reformat Map -- New map will hold the data related map name; Ex: "Blizzard_World"
    let NewMap = "";
    for(var items in Map){
      if(Map[items] == " ") NewMap += "_";
      else NewMap += Map[items];
    }


    //Set page title
    document.getElementById("Title").innerHTML = Map;

    //Wipe data holder
    document.getElementById("DataHolder").innerHTML = "";

    let MapPageData = window.Data.Guides.Maps.MapList.Maps[NewMap];

    //Create wiki page
    let Page = new PageBlock(Map, MapPageData);



  }

}

//TEAM COMP TYPE LOAD


//i'm glad i wrote everything in 3 menus, it's like i planned this ovo
