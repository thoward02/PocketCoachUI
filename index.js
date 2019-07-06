//Index
window.SwitchToMenu = function(){
    //Vars
    let LeftSide = document.getElementById("LeftSide");

    //Push it into view
    if(document.getElementById("LeftSide").style.left == "-2000px"){

      //Replace left side
      document.getElementById("LeftSide").style.left = "0px";

      //Create black elem
      let Black = document.createElement("div");
      document.getElementById("AppHolder").appendChild(Black);
      Black.id = "AppHolder-BlackBox";

      //Stylize
      Black.style.width = "100%";
      Black.style.height = "100%";
      Black.style.position = "absolute";
      Black.style.top = "0";
      Black.style.float = "left";
      Black.style.backgroundColor = "rgba(0,0,0,0.5)";

      //Make closing function
      Black.onclick = function(){
        document.getElementById("LeftSide").style.left = "-2000px";
        document.getElementById("AppHolder").removeChild(document.getElementById("AppHolder-BlackBox"));

      }


    }

}

window.OpenProfile  = function(){
  //Clear window
  document.getElementById("Title").innerHTML = "Heroes";
  document.getElementById("DataHolder").innerHTML = "";

  //If first time loading, black box doesn't exist
  if(document.getElementById("AppHolder-BlackBox") != null){

    document.getElementById("AppHolder-BlackBox").onclick();

  }

  //Setup title menu
  document.getElementById("Title").innerHTML = "Profile";

  //Setup profile
  let ProfilePicture     = document.createElement("div");
  ProfilePicture.id      = "ProfilePicture";

  let Picture            = document.createElement("img");
  Picture.src            = "https://i.groupme.com/1024x1024.jpeg.8b2eb37bbaed48698e663f78206dc38d.preview";
  Picture.id             = "ProfilePicture-Image";

  let UserInfo           = document.createElement("div");
  UserInfo.id            = "UserInfo";

  let UserInfoName       = document.createElement("div");
  UserInfoName.id        = "UserInfo-Name";
  UserInfoName.innerHTML = "Hans, The King";


  //Append
  ProfilePicture.appendChild(Picture);

  UserInfo.appendChild(UserInfoName);

  let DataHolder = document.getElementById("DataHolder");
  DataHolder.appendChild(ProfilePicture);
  DataHolder.appendChild(UserInfo);

}



function Main(){
  //Reset sizing
  document.getElementById("Display").style.width   = window.innerWidth;
  document.getElementById("Display").style.height  = window.innerHeight;

  //Set Specific values
  document.getElementById("LeftSide").style.width  = "60%";
  document.getElementById("LeftSide").style.left   = "-2000px";
  document.getElementById("RightSide").style.width = "100%";

  //Build Menu
  BuildMenu();


  //build main button
  let Button     = document.getElementById("MenuButton");

  //Build event
  Button.onclick = window.SwitchToMenu;

}

document.addEventListener("DOMContentLoaded", function(){

  Main();
  window.OpenProfile();
  window.onresize = function(){
    document.getElementById("Display").style.height = "100%";
    document.getElementById("Display").style.width  = "100%";
  }


});
