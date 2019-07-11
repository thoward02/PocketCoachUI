//Index
window.ClearPlus = function(){




}

window.AddPlus = function(){

  let Header = document.getElementById("TitleCard");
  let Plus   = document.createElement("img");

  Plus.src = "./Resources/plus.svg";

  Header.appendChild(Plus)


}

window.SwitchToMenu  = function(){
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

window.OpenProfile   = function(){
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
  let ProfilePicture      = document.createElement("div");
  ProfilePicture.id       = "ProfilePicture";

  let Picture             = document.createElement("img");
  Picture.src             = "https://i.groupme.com/1024x1024.jpeg.8b2eb37bbaed48698e663f78206dc38d";
  Picture.id              = "ProfilePicture-Image";

  let UserInfo            = document.createElement("div");
  UserInfo.id             = "UserInfo";

  let UserInfoName        = document.createElement("div");
  UserInfoName.id         = "UserInfo-Name";
  UserInfoName.innerHTML  = "Hans, The King";

  let InGameName          = document.createElement("div")
  let GameInfoDiv         = document.createElement("div");
  let GameInfoTitle       = document.createElement("div");
  let GameInfoRankPicture = document.createElement("img");

  GameInfoTitle.innerHTML = "SR 2557";
  InGameName.innerHTML    = "Gearetical#13376";
  GameInfoRankPicture.src = "http://d1mt9jmphk9kik.cloudfront.net/teamdignitas/image1525903511.png";

  //Adjust center, style
  ProfilePicture.style.marginLeft    = "31%";

  //Setup
  GameInfoDiv.style.width            = "90%";
  GameInfoDiv.style.height           = "90%";
  GameInfoDiv.style.marginLeft       = "5%";
  GameInfoDiv.style.marginTop        = "5%";
  GameInfoDiv.style.paddingTop       = "5%";
  GameInfoDiv.style.padddingBottom   = "5%";
  GameInfoDiv.style.background       = "url(https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/career-portrait.png)";
  GameInfoDiv.style.backgroundPosition = "bottom";
  GameInfoDiv.style.backgroundColor  = "rgba(0,0,0,0.5)";
  GameInfoDiv.style.backgroundRepeat = "no-repeat"
  GameInfoDiv.style.borderRadius     = "25px";

  InGameName.style.fontFamily        = "Montserrat";
  InGameName.style.fontWeight        = "500";
  InGameName.style.fontSize          = "70px";
  InGameName.style.color             = "#D5FFF9";
  InGameName.style.textAlign         = "center";
  InGameName.style.paddingTop        = "2%";

  GameInfoTitle.style.fontFamily     = "Montserrat";
  GameInfoTitle.style.fontWeight     = "200";
  GameInfoTitle.style.color          = "#D5FFF9";
  GameInfoTitle.style.textAlign      = "center";
  GameInfoTitle.style.paddingTop     = "2%";

  GameInfoRankPicture.style.marginLeft  = "35%";
  GameInfoRankPicture.style.marginTop  = "2%";


  //Append
  ProfilePicture.appendChild(Picture);

  UserInfo.appendChild(UserInfoName);


  GameInfoDiv.appendChild(ProfilePicture);
  GameInfoDiv.appendChild(UserInfo);
  GameInfoDiv.appendChild(InGameName);
  GameInfoDiv.appendChild(GameInfoTitle);
  GameInfoDiv.appendChild(GameInfoRankPicture);

  //Append to body
  let DataHolder = document.getElementById("DataHolder");
  DataHolder.appendChild(GameInfoDiv);

}

window.TossBetaError = function(){
  //Create element
  let BackgroundDiv = document.createElement("div");
  let ErrorDiv      = document.createElement("div");
  let ErrorText     = document.createElement("div");
  let OkayBox       = document.createElement("div");

  //Append
  ErrorDiv.appendChild(ErrorText);
  ErrorDiv.appendChild(OkayBox);
  BackgroundDiv.appendChild(ErrorDiv);
  document.getElementById("Display").appendChild(BackgroundDiv);

  //Style
  BackgroundDiv.style.width  = "100%";
  BackgroundDiv.style.height = "100%";
  BackgroundDiv.style.margin = "0";
  BackgroundDiv.style.backgroundColor = "rgba(0,0,0,0.6)";
  BackgroundDiv.style.zIndex = "2";
  BackgroundDiv.style.position = "absolute";


  ErrorDiv.style.width            = "80%";
  ErrorDiv.style.borderRadius     = "20px";
  ErrorDiv.style.height           = "40%";
  ErrorDiv.style.marginLeft       = "10%";
  ErrorDiv.style.marginTop        = "40%";
  ErrorDiv.style.backgroundColor  = "rgba(0,0,0,0.8)";

  ErrorText.style.paddingTop  = "10%"
  ErrorText.style.textAlign  = "center";
  ErrorText.style.color      = "#D5FFF9";
  ErrorText.style.fontFamily = "Montserrat";
  ErrorText.style.fontSize   = "50px";

  OkayBox.style.width           = "60%";
  OkayBox.style.height          = "30%";
  OkayBox.style.textAlign       = "center";
  OkayBox.style.marginLeft      = "20%";
  OkayBox.style.marginTop       = "40%";
  OkayBox.style.fontSize        = "40px";
  OkayBox.style.fontFamily      = "Montserrat";
  OkayBox.style.color           = "rgba(115,55,176, 0.6)"


  //Fill
  ErrorText.innerHTML       = "This is just a BETA, you can't access that right now c:";
  OkayBox.innerHTML         = "That's kinda shitty...?";
  BackgroundDiv.id          = "ErrorText";


  //Add function
  OkayBox.onclick = function(){
    //remove div
    let BackgroundDiv = document.getElementById("ErrorText")
    document.getElementById("Display").removeChild(BackgroundDiv);

    //Clean function
    document.getElementById("Display").onclick = null;
  }



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
