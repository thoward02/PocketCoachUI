//OwO is the new UwU
//Page Loading1


/**
* TODO:
*   ~~Make sub menu clickable, not main menu~~
*   ~~Rewrite data~~
*   Make menu title look nice (spacing)
**/

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
      this.Elem.style.fontFamily = "Montserrat";
      this.Elem.style.fontWeight = "500";
      this.Elem.style.color = "#D5FFF9";

    }


}


function BuildMenu(){

  let AppMenu = document.getElementById("AppMenu");

  //Menu Data
  window.Menu = {
    "Guides" : {
      "Class" : null,
      "Maps" : {
        "Funct" : window.LoadMaps,
        "Class" : null
      },
      "Heroes" : {
        "Funct" : window.LoadHeroes,
        "Class" : null
      },
      "TeamComps" : {
        "Funct" : window.LoadTeamComps,
        "Class" : null
      }
    },

    "Coaching" : {
      "Class" : null,
      "Requests" : {
        "Funct" : window.LoadRequests,
        "Class" : null
      },
      "Vods" : {
        "Funct" : window.LoadVods,
        "Class" : null
      }


    },
    "Quizzes" : {

      "Class" : null,
      "Easy" : {
        "Funct" : window.LoadEasy,
        "Class" : null
      },
      "Medium" : {
        "Funct" : window.LoadMedium,
        "Class" : null
      },
      "Hard" : {
        "Funct" : window.LoadHard,
        "Class" : null
      }

    }
  }

  //Build menu items
  for(var item in window.Menu){

    let BaseGuide = window.Menu[item];

    //Load item into menu
    let Block = new MenuButton(item);
    window.Menu[item].Class = Block;

    for(var blocks in window.Data[item]){
      let SubMenuElem = document.createElement("div");
      SubMenuElem.innerHTML = blocks;
      SubMenuElem.className = "SubMenu";
      SubMenuElem.onclick = window.Menu[item][blocks].Funct;
      Block.Elem.appendChild(SubMenuElem);
    }


    //Append item
    AppMenu.appendChild(Block.Elem);

    new ResizeObserver(function(){
      if( (document.getElementById("LeftSide").style.width == "60%")  &&  Block.Elem.style.display  == "none"){
        Block.Elem.style.display  = "block";
      }else{
        Block.Elem.style.display  = "none";
      }

      Block.Elem.style.width =  "80%";
      Block.Elem.style.marginTop = "5%";

    }).observe(document.getElementById("LeftSide"));

  }

  //Build Resizing






}
