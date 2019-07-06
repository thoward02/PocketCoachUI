window.LoadGuides = function(){
  //Clear previous data
  document.getElementById("Title").innerHTML = "Guides";
  document.getElementById("DataHolder").innerHTML = "";

  //Remove black, and reset view
  document.getElementById("AppHolder-BlackBox").onclick();


  //Start adding new data into view
  let GuideData = window.Data.Guides;

  for(var items in GuideData){

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

  //Build inside data
  let MapData = window.Data.Guides.Maps;
  for(var items in MapData) {

  }

}

window.LoadHeroes = function(){

  document.getElementById("Title").innerHTML = "Heroes";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();
}

window.TeamComps = function(){

  document.getElementById("Title").innerHTML = "TeamComps";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();
}
