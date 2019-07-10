//Easy
class QuizPageBlock{

  constructor(Title, DataBlock){

    this.Title                 = Title;
    this.VideoSrc              = DataBlock.Content.Video;

    this.Elem                  = document.createElement("div");
    this.Video                 = document.createElement("video");

    this.Body                  = document.createElement("div");
    this.Answer                = document.createElement("div");

    this.Elem.id               = this.Title;
    this.Video.source          = this.VideoSrc;

    this.Elem.appendChild(this.Video);
    this.Elem.appendChild(this.Body);
    this.Body.appendChild(this.Answer);

    for(var items in DataBlock.Content.Answers) {

      let Text = DataBlock.Content.Answers[items];
      let Element = document.createElement("div");
      Element.innerHTML = Text;

      this.Elem.appendChild(Element);

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
    this.Elem.style.textAlign   = "center";
    this.Elem.style.overflowY   = "hidden";

    this.Elem.style.backgroundColor = "rgba(0,0,0,0.3)";

    this.Elem.style.fontFamily  = "Montserrat";
    this.Elem.style.fontWeight  = "500";

    this.Elem.style.display     = "block";
    this.Elem.style.color       = "#D5FFF9";

    this.Body.style.textAlign   = "left";
    this.Body.style.fontWeight = "200";
    this.Body.style.fontSize = "30px";
    this.Body.style.padding = "5%";

    this.Video.style.width  = "60%";
    this.Video.style.height = "20%";
    this.Video.style.float  = "center";
    this.Video.style.overflow = "hidden";
    this.Video.style.borderRadius = "25px";
    this.Video.controls = "true";
    this.Video.style.display = "block";
    this.Video.style.margin = "auto";
    this.Video.style.marginTop = "3%";

    this.Answer.style.marginLeft = "32%";




  }
}


window.LoadEasy = function(){

  document.getElementById("Title").innerHTML = "Easy";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let EasyData = window.Data.Quizzes.Easy;

  for(var items in EasyData) {
    let Block = new MenuBlock(items, EasyData[items]);
    Block.Elem.onclick = function(x){window.LoadQuizPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);
  }

}

//Medium
window.LoadMedium = function(){
  document.getElementById("Title").innerHTML = "Medium";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let MediumData = window.Data.Quizzes.Medium;

  for(var items in MediumData) {
    let Block = new MenuBlock(items, MediumData[items]);
    Block.Elem.onclick = function(x){window.LoadQuizPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);
  }
}

//Hard
window.LoadHard = function(){
  document.getElementById("Title").innerHTML = "Hard";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let HardData = window.Data.Quizzes.Hard;

  for(var items in HardData) {
    let Block = new MenuBlock(items, HardData[items]);
    Block.Elem.onclick = function(x){window.LoadQuizPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);
  }
}

window.LoadQuizPage = function(Quiz){
  console.log(Quiz);
  document.getElementById("Title").innerHTML = Quiz;

  //Wipe data holder
  document.getElementById("DataHolder").innerHTML = "";

  let QuizPageData = window.Data.Quizzes.QuizList[Quiz];

  //Create wiki page
  let Page = new QuizPageBlock(Quiz, QuizPageData);
  document.getElementById("DataHolder").appendChild(Page.Elem);
}
