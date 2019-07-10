class MenuBlock{

  constructor(Title, DataBlock){
    this.Title                 = Title;
    this.DescText              = DataBlock.Description;
    this.ImageSrc              = DataBlock.Image;

    let TitleText = this.Title.replace(/_/g, " ");
    this.Title = TitleText;

    //Modify text
    let NewText = "";
    for(var x = 0; x < 68; x++){
      if(this.DescText[x] != null)
        NewText += this.DescText[x];
    }
    NewText += " ...";

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
      this.Elem.style.height      = "15%";
      this.Elem.style.width       = "90%";
      this.Elem.style.marginLeft  = "5%";
      this.Elem.style.marginBottom= "5%";
      this.Elem.style.marginTop   = "5%";

      this.Elem.style.display     = "block";
      this.Elem.style.textAlign   = "center";
      this.Elem.style.overflowY   = "hidden";
      this.Elem.style.border      = "none";

      this.Elem.style.fontFamily  = "Montserrat";
      this.Elem.style.fontWeight  = "500";

      this.Elem.style.color       = "#D5FFF9";
      this.Elem.style.backgroundColor = "rgba(0,0,0,0.3)";

      this.Elem.style.borderRadius = "20px";

      //Setup picture
      this.Picture.style.width      = "30%";
      this.Picture.style.height     = "100%";

      this.Picture.style.float      = "left";
      this.Picture.style.margin     = "0";
      this.Picture.style.padding    = "0";


      //Setup Header
      this.Header.style.textAlign   = "left";
      this.Header.style.marginTop   = "2.8%";
      this.Header.style.marginBottom   = "1%";
      this.Header.style.marginLeft  = "32%";
      this.Header.style.fontSize = "45px";

      //Setup Description
      this.Description.style.textAlign   = "left";
      this.Description.style.fontWeight = "200";
      this.Description.style.fontSize = "30px";

      this.Description.style.marginLeft   = "32%";
      this.Description.style.marginRight  = "2%";

    }
}


class PageBlock{

  constructor(Title, DataBlock){
    this.Title                 = Title;
    this.DescText              = DataBlock.Description;
    this.ImageSrc              = DataBlock.Image;

    let TitleText              = this.Title.replace(/_/g, " ");
    this.Title                 = TitleText;

    this.Elem                  = document.createElement("div");
    this.Picture               = document.createElement("img");
    this.Description           = document.createElement("div");
    this.Header                = document.createElement("div");

    this.Body                  = document.createElement("div");
    this.SubHead               = document.createElement("div");
    this.SubText               = document.createElement("div");

    this.Elem.id               = this.Title;
    this.Header.innerHTML      = this.Title;
    this.Description.innerHTML = this.DescText;
    this.Picture.src           = this.ImageSrc;

    this.Elem.appendChild(this.Picture);
    this.Elem.appendChild(this.Header);
    this.Elem.appendChild(this.Description);
    this.Elem.appendChild(this.Body);
    this.Body.appendChild(this.SubHead);
    this.Body.appendChild(this.SubText);

    for(var items in DataBlock.GuideData.Body) {
      //Set up vars
      let Type = DataBlock.GuideData.Body[items][0];
      let Text = DataBlock.GuideData.Body[items][1];


      //Handle Headers
      if(Type == "Header"){
        //Create element
        let Element = document.createElement("div");
        Element.innerHTML = Text;

        //style
        Element.style.marginTop  = "5%";
        Element.style.marginBottom = "5%";
        Element.style.marginLeft = "3%";
        Element.style.fontSize   = "70px";


        //append
        this.Elem.appendChild(Element);

      }

      if(Type == "SubHeader"){
        //Create element
        let Element = document.createElement("div");
        Element.innerHTML = Text;

        //style
        Element.style.marginTop  = "5%";
        Element.style.marginBottom = "5%";
        Element.style.marginLeft = "3%";
        Element.style.fontSize   = "45px";
        Element.style.fontWeight = "200";


        //append
        this.Elem.appendChild(Element);

      }

      //Handle Paragraphs
      if(Type == "Text"){
        //Create element
        let Element = document.createElement("div");
        Element.innerHTML = Text;

        //style
        Element.style.marginLeft = "3%";
        Element.style.marginRight = "3%";
        Element.style.paddingTop = "2%";

        Element.style.fontWeight = "200";
        Element.style.fontSize = "30px";



        //append
        this.Elem.appendChild(Element);
      }

      if(Type == "Img"){
        //Create menu te
        let Title = DataBlock.GuideData.Body[items][2];

        //Create element
        let TitleElem = document.createElement("div");
        TitleElem.innerHTML = Title;

        let Element = document.createElement("img");
        Element.src = Text;

        //style
        TitleElem.style.textAlign = "center";
        TitleElem.style.fontSize = "60px";
        TitleElem.style.fontWeight = "200";

        TitleElem.style.paddingTop = "10%";


        Element.style.width = "80%";
        Element.style.height = "50%";
        Element.style.marginLeft = "10%";
        Element.style.paddingTop = "1%";
        Element.style.paddingBottom = "5%";

        Element.style.fontWeight = "200";
        Element.style.fontSize = "30px";



        //append
        this.Elem.appendChild(TitleElem);
        this.Elem.appendChild(Element);
      }


    }
    this.Style();

  }


  Style(){

    this.Elem.style.width = "90%";
    this.Elem.style.marginLeft = "5%";
    this.Elem.style.marginTop = "5%";
    this.Elem.style.marginBottom = "10%";
    this.Elem.style.paddingBottom = "10%";
    this.Elem.style.borderRadius = "25px";

    this.Elem.style.backgroundColor = "rgba(0,0,0,0.3)";

    this.Elem.style.fontFamily  = "Montserrat";
    this.Elem.style.fontWeight  = "500";

    this.Elem.style.display     = "block";
    this.Elem.style.color       = "#D5FFF9";

    this.Header.style.width = "51%";
    this.Header.style.fontSize = "50px";
    this.Header.style.textAlign = "left";
    this.Header.style.marginLeft = "3%";
    this.Header.style.paddingTop = "3%";
    this.Header.style.paddingBottom = "5%";

    this.Description.style.width      = "51%";
    this.Description.style.marginLeft = "3%";
    this.Description.style.paddingTop = "3%";
    this.Description.style.textAlign   = "left";
    this.Description.style.fontSize = "30px";
    this.Description.style.fontWeight = "200";

    this.Body.style.textAlign   = "left";
    this.Body.style.fontWeight = "200";
    this.Body.style.fontSize = "30px";
    this.Body.style.padding = "5%";

    this.Picture.style.width  = "40%";
    this.Picture.style.height = "20%";
    this.Picture.style.marginTop = "5%";
    this.Picture.style.marginRight = "2%";
    this.Picture.style.float  = "right";
    this.Picture.style.overflow = "hidden";
    this.Picture.style.borderRadius = "25px";

    this.SubText.style.marginLeft = "2%";




  }


}

class StatsPageBlock{

  constructor(Title, DataBlock){
    this.Title                 = Title;
    this.DescText              = DataBlock.Description;
    this.ImageSrc              = DataBlock.Image;

    let TitleText              = this.Title.replace(/_/g, " ");
    this.Title                 = TitleText;

    this.Elem                  = document.createElement("div");
    this.Picture               = document.createElement("img");
    this.Description           = document.createElement("div");
    this.Header                = document.createElement("div");

    this.Body                  = document.createElement("div");
    this.SubHead               = document.createElement("div");
    this.SubText               = document.createElement("div");

    this.Elem.id               = this.Title;
    this.Header.innerHTML      = this.Title;
    this.Description.innerHTML = this.DescText;
    this.Picture.src           = this.ImageSrc;

    this.Elem.appendChild(this.Picture);
    this.Elem.appendChild(this.Header);
    this.Elem.appendChild(this.Description);
    this.Elem.appendChild(this.Body);
    this.Body.appendChild(this.SubHead);
    this.Body.appendChild(this.SubText);

    for(var items in DataBlock.Body) {
      //Set up vars
      let Type = DataBlock.Body[items][0];
      let Text = DataBlock.Body[items][1];


      //Handle Headers
      if(Type == "Header"){
        //Create element
        let Element = document.createElement("div");
        Element.innerHTML = Text;

        //style
        Element.style.marginTop  = "5%";
        Element.style.marginBottom = "5%";
        Element.style.marginLeft = "3%";
        Element.style.fontSize   = "70px";


        //append
        this.Elem.appendChild(Element);

      }

      if(Type == "SubHeader"){
        //Create element
        let Element = document.createElement("div");
        Element.innerHTML = Text;

        //style
        Element.style.marginTop  = "5%";
        Element.style.marginBottom = "5%";
        Element.style.marginLeft = "3%";
        Element.style.fontSize   = "45px";
        Element.style.fontWeight = "200";


        //append
        this.Elem.appendChild(Element);

      }

      //Handle Paragraphs
      if(Type == "Text"){
        //Create element
        let Element = document.createElement("div");
        Element.innerHTML = Text;

        //style
        Element.style.marginLeft = "3%";
        Element.style.marginRight = "3%";
        Element.style.paddingTop = "2%";

        Element.style.fontWeight = "200";
        Element.style.fontSize = "30px";



        //append
        this.Elem.appendChild(Element);
      }

      if(Type == "Img"){
        //Create menu te
        let Title = DataBlock.Body[items][2];

        //Create element
        let TitleElem = document.createElement("div");
        TitleElem.innerHTML = Title;

        let Element = document.createElement("img");
        Element.src = Text;

        //style
        TitleElem.style.textAlign = "center";
        TitleElem.style.fontSize = "60px";
        TitleElem.style.fontWeight = "200";

        TitleElem.style.paddingTop = "10%";


        Element.style.width = "80%";
        Element.style.height = "50%";
        Element.style.marginLeft = "10%";
        Element.style.paddingTop = "1%";
        Element.style.paddingBottom = "5%";

        Element.style.fontWeight = "200";
        Element.style.fontSize = "30px";



        //append
        this.Elem.appendChild(TitleElem);
        this.Elem.appendChild(Element);
      }


    }
    this.Style();

  }


  Style(){

    this.Elem.style.width = "90%";
    this.Elem.style.marginLeft = "5%";
    this.Elem.style.marginTop = "5%";
    this.Elem.style.marginBottom = "10%";
    this.Elem.style.paddingBottom = "10%";
    this.Elem.style.borderRadius = "25px";

    this.Elem.style.backgroundColor = "rgba(0,0,0,0.3)";

    this.Elem.style.fontFamily  = "Montserrat";
    this.Elem.style.fontWeight  = "500";

    this.Elem.style.display     = "block";
    this.Elem.style.color       = "#D5FFF9";

    this.Header.style.width = "51%";
    this.Header.style.fontSize = "50px";
    this.Header.style.textAlign = "left";
    this.Header.style.marginLeft = "3%";
    this.Header.style.paddingTop = "3%";
    this.Header.style.paddingBottom = "5%";

    this.Description.style.width      = "51%";
    this.Description.style.marginLeft = "3%";
    this.Description.style.paddingTop = "3%";
    this.Description.style.textAlign   = "left";
    this.Description.style.fontSize = "30px";
    this.Description.style.fontWeight = "200";

    this.Body.style.textAlign   = "left";
    this.Body.style.fontWeight = "200";
    this.Body.style.fontSize = "30px";
    this.Body.style.padding = "5%";

    this.Picture.style.width  = "100%";
    this.Picture.style.height = "10%";
    this.Picture.style.marginTop = "5%";
    this.Picture.style.marginRight = "2%";
    this.Picture.style.float  = "right";
    this.Picture.style.overflow = "hidden";
    this.Picture.style.borderRadius = "25px";

    this.SubText.style.marginLeft = "2%";




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
      "Funct" : window.LoadPayload,
      "Class" : null,
      "SubMaps" : {
        "Dorado" : {},
        "Havana" : {},
        "Junkertown" : {},
        "Rialto" : {},
        "Route_66" : {},
        "Watchpoint_Gibraltar" : {}

      },


    },
    "CP" : {
      "Funct" : window.LoadCP,
      "Class" : null,
      "SubMaps" : {
        "Busan" : {
          "Description" : "A hybrid game mode map set in Numbani, a artificial city located on the edge of Nigeria, boasting a home where Omnics and Humans may exist in peace together",
          "Image" : "./Resources/OWMaps/MapPictures/busan.jpg",
        },
        "Ilios" : {
          "Description" : "A hybrid game mode map set in Numbani, a artificial city located on the edge of Nigeria, boasting a home where Omnics and Humans may exist in peace together",
          "Image" : "./Resources/OWMaps/MapPictures/ilios.jpg",
        },
        "Lijiang_Tower" :{
          "Description" : "A hybrid game mode map set in Numbani, a artificial city located on the edge of Nigeria, boasting a home where Omnics and Humans may exist in peace together",
          "Image" : "./Resources/OWMaps/MapPictures/lijiang-tower.jpg",
        },
        "Nepal" : {
          "Description" : "A hybrid game mode map set in Numbani, a artificial city located on the edge of Nigeria, boasting a home where Omnics and Humans may exist in peace together",
          "Image" : "./Resources/OWMaps/MapPictures/nepal.jpg",
        },
        "Oasis" :{
          "Description" : "A hybrid game mode map set in Numbani, a artificial city located on the edge of Nigeria, boasting a home where Omnics and Humans may exist in peace together",
          "Image" : "./Resources/OWMaps/MapPictures/oasis.jpg",
        }

      }
    },
    "CP2" : {
      "Funct" : window.LoadCP2,
      "Class" : null,
      "SubMaps" : {
        "Horizon_Lunar_Colony" : {
          "Description" : "A hybrid game mode map set in Numbani, a artificial city located on the edge of Nigeria, boasting a home where Omnics and Humans may exist in peace together",
          "Image" : "./Resources/OWMaps/MapPictures/horizon-lunar-colony.jpg",
        },
        "Paris" :{
          "Description" : "A hybrid game mode map set in Numbani, a artificial city located on the edge of Nigeria, boasting a home where Omnics and Humans may exist in peace together",
          "Image" : "./Resources/OWMaps/MapPictures/paris.jpg",
        },
        "Temple_of_Anubis" : {
          "Description" : "A hybrid game mode map set in Numbani, a artificial city located on the edge of Nigeria, boasting a home where Omnics and Humans may exist in peace together",
          "Image" : "./Resources/OWMaps/MapPictures/temple-of-anubis.jpg",
        },
        "Volskaya_Industries" : {
          "Description" : "A hybrid game mode map set in Numbani, a artificial city located on the edge of Nigeria, boasting a home where Omnics and Humans may exist in peace together",
          "Image" : "./Resources/OWMaps/MapPictures/volskaya-industries.jpg",
        },

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
    "DPS" : {
      "Funct" : window.LoadDPS
    },
    "MainSupport" : {
      "Funct" : window.LoadMainSupport
    },
    "OffSupport" : {
      "Funct" : window.TossBetaError
    },
    "MainTank" : {
      "Funct" : window.TossBetaError
    },
    "OffTank" : {
      "Funct" : window.TossBetaError
    }

  }

  document.getElementById("Title").innerHTML = "Heroes";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let HeroData = window.Data.Guides.Heroes.HeroTypes;

  for(var items in HeroData){
    let Block = new MenuBlock(items, HeroData[items]);

    //Set up on click
    Block.Elem.onclick = window.HeroTypeData[items].Funct;

    document.getElementById("DataHolder").appendChild(Block.Elem);
  }
}

window.LoadTeamComps = function(){

  window.TeamComp = {

      "2-2-2"       : {
        "Funct" : window.Load222
      },
      "3-3"       : {
        "Funct" : window.Load33

      },
      "OffMeta"   : {
        "Funct" : window.LoadOffMeta
      }
    }

  document.getElementById("Title").innerHTML = "TeamComps";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let TeamCompData = window.Data.Guides.TeamComps.Comps;

  for(var items in TeamCompData){
    let Block = new MenuBlock(items, TeamCompData[items]);
    Block.Elem.onclick = window.TeamComp[items].Funct;
    document.getElementById("DataHolder").appendChild(Block.Elem);
  }


}

window.Load222 = function() {

  document.getElementById("Title").innerHTML = "2-2-2";
  document.getElementById("DataHolder").innerHTML = "";

  let Data222 = window.Data.Guides.TeamComps.Comps["2-2-2"].GuideData;

  for(var items in Data222) {
    window.localStorage.setItem("Button", 0);
    console.log(Data222[items]);
    let Block = new MenuBlock(items, Data222[items]);
    Block.Elem.onclick = function(x){window.LoadTeamCompPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);
  }
}

window.Load33 = function() {

  document.getElementById("Title").innerHTML = "3-3";
  document.getElementById("DataHolder").innerHTML = "";

  let Data33 = window.Data.Guides.TeamComps.Comps["3-3"];


  for(var items in Data33) {
    window.localStorage.setItem("Button", 0);
    let Block = new MenuBlock(items, Data33[items]);

    Block.Elem.onclick = function(x){window.LoadTeamCompPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);
  }
}

window.LoadOffMeta = function() {

  document.getElementById("Title").innerHTML = "Off Meta";
  document.getElementById("DataHolder").innerHTML = "";

  let OffMetaData = window.Data.Guides.TeamComps.Comps.OffMeta;


  for(var items in OffMetaData) {
    window.localStorage.setItem("Button", 0);
    let Block = new MenuBlock(items, OffMetaData[items]);

    Block.Elem.onclick = function(x){window.LoadTeamCompPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);
  }
}






//LOAD Sub menus

// -------------- MAP TYPES ---------------- //
window.LoadHybrid   = function(){
  document.getElementById("Title").innerHTML = "Hybrid";
  document.getElementById("DataHolder").innerHTML = "";

  let HybridData = window.Data.Guides.Maps.MapTypes.Hybrid.Maps;


  for(var items in HybridData) {
    let Block = new MenuBlock(items, HybridData[items]);

    Block.Elem.onclick = function(x){window.LoadMapPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);

  }

}
window.LoadPayload  = function(){

  document.getElementById("Title").innerHTML = "Payload";
  document.getElementById("DataHolder").innerHTML = "";

  let PayloadData = window.Data.Guides.Maps.MapTypes.Payload.Maps;
  for(var items in PayloadData) {
    let Block = new MenuBlock(items, PayloadData[items]);
    Block.Elem.onclick = function(x){window.LoadMapPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);

  }
}

window.LoadCP      = function(){

  document.getElementById("Title").innerHTML = "CP";
  document.getElementById("DataHolder").innerHTML = "";

  let CPData = window.Data.Guides.Maps.MapTypes.CP.Maps;

  for(var items in CPData) {
    let Block = new MenuBlock(items, CPData[items]);
    Block.Elem.onclick = function(x){window.LoadMapPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);

  }

}
window.LoadCP2      = function(){

  document.getElementById("Title").innerHTML = "2CP";
  document.getElementById("DataHolder").innerHTML = "";

  let CP2Data = window.Data.Guides.Maps.MapTypes.CP2.Maps;

  for(var items in CP2Data) {
    console.log(items)
    let Block = new MenuBlock(items, CP2Data[items]);
    Block.Elem.onclick = function(x){window.LoadMapPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);

  }

}

// ----------------------------------------- //


// -------------- HERO TYPES ----------------//

window.LoadDPS         = function(){
  //Setup hero list
  let HeroList = window.Data.Guides.Heroes.HeroTypes.DPS.Heroes;

  //Clean up main page
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("Title").innerHTML      = "DPS";

  //Loop hero list
  for(var items in HeroList){
    //Set up vars
    let HeroData = HeroList[items];
    let Hero     = items;

    //Create button for hero
    let Block = new MenuBlock(Hero, HeroData);
    Block.Elem.onclick = function(x){window.LoadHeroPage(x.path[1].id)}

    //Append block
    document.getElementById("DataHolder").appendChild(Block.Elem);




  }

}

window.LoadMainSupport = function(){
  //Setup hero list
  let HeroList = window.Data.Guides.Heroes.HeroTypes.MainSupport.Heroes;

  //Clean up main page
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("Title").innerHTML      = "Main Support";

  //Loop hero list
  for(var items in HeroList){
    //Set up vars
    let HeroData = HeroList[items];
    let Hero     = items;

    //Create button for hero
    let Block = new MenuBlock(Hero, HeroData);
    Block.Elem.onclick = function(x){window.LoadHeroPage(x.path[1].id)}

    //Append block
    document.getElementById("DataHolder").appendChild(Block.Elem);

  }

}

window.LoadOffSuport   = function(){

}

window.LoadMainTank    = function(){

}

window.LoadOffTank     = function(){

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
    if(Map != "Blizzard World"){

      window.TossBetaError();

    }
    else{
      //Set page title
      document.getElementById("Title").innerHTML = Map;

      //Wipe data holder
      document.getElementById("DataHolder").innerHTML = "";

      let MapPageData = window.Data.Guides.Maps.MapList.Maps[NewMap];

      //Create wiki page
      let Page = new PageBlock(Map, MapPageData);
      document.getElementById("DataHolder").appendChild(Page.Elem);

  }

  }

}

//LOAD HERO PAGE
window.LoadHeroPage  = function(Hero){
  //To ensure that only hero data is built
    //Set page title
    if(Hero == "Ana" ){

      document.getElementById("Title").innerHTML = Hero;

      //Wipe data holder
      document.getElementById("DataHolder").innerHTML = "";

      let HeroListData = window.Data.Guides.Heroes.HeroList[Hero];

      //Create wiki page
      let Page = new PageBlock(Hero, HeroListData);
      document.getElementById("DataHolder").appendChild(Page.Elem);

    }

    if(Hero != "Ana" && Hero!="DataHolder"){
      window.TossBetaError();
    }

}

window.LoadTeamCompPage = function(Comp) {

  document.getElementById("Title").innerHTML = Comp;

  //Wipe data holder
  document.getElementById("DataHolder").innerHTML = "";


  let TeamCompListData = window.Data.Guides.TeamComps.Comps;
  let NewData = {}
  if(TeamCompListData["2-2-2"].GuideData.hasOwnProperty(Comp)){
    NewData = window.Data.Guides.TeamComps.Comps["2-2-2"].GuideData[Comp];
  }
  if(TeamCompListData["3-3"].GuideData.hasOwnProperty(Comp)){
    NewData = window.Data.Guides.TeamComps.Comps["3-3"].GuideData[Comp];
  }
  if(TeamCompListData["OffMeta"].GuideData.hasOwnProperty(Comp)){
    NewData = window.Data.Guides.TeamComps.Comps["OffMeta"].GuideData[Comp];
  }

  //Create wiki page
  let Page = new StatsPageBlock(Comp, NewData);
  document.getElementById("DataHolder").appendChild(Page.Elem);
}

//i'm glad i wrote everything in 3 menus, it's like i planned this ovo
