//Easy
class QuizPageBlock{

  constructor(Title, DataBlock){

    this.Title                 = Title;
    this.VideoSrc              = DataBlock.Content.Video;

    this.Elem                  = document.createElement("div");
    this.Video                 = document.createElement("img");

    this.Body                  = document.createElement("div");
    this.Answer                = document.createElement("div");
    this.Question              = document.createElement("div");

    this.Elem.id               = this.Title;
    this.Video.id              = "QuizVideo";
    this.Question.id           = "Question"
    this.Body.id               = "Body-Quest"
    this.Video.src = "https://s3.amazonaws.com/prod-media.gameinformer.com/styles/body_default/s3/legacy-images/imagefeed/An%20Epic%20Evolution/Overwatchreview610.jpg"

    this.Elem.appendChild(this.Video);
    this.Elem.appendChild(this.Body);
    this.Body.appendChild(this.Answer);
    this.Body.appendChild(this.Question);

    this.Question.innerHTML = DataBlock.Content.Question;

    for(var items in DataBlock.Content.Answers) {

      let Text = DataBlock.Content.Answers[items];
      let Element = document.createElement("div");
      Element.innerHTML = Text;

      Element.style.backgroundColor = "rgba(0,0,0,0.4)";
      Element.style.margin = "4%";
      Element.style.borderRadius = "25px";
      Element.style.minWidth = "50%";
      Element.style.height = "auto";
      Element.style.paddingTop = "2%";
      Element.style.paddingBottom = "2%";
      Element.style.fontFamily  = "Montserrat";
      Element.style.fontWeight  = "200";

      this.Elem.appendChild(Element);

    }

    //Video pause elements



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


    this.Video.style.width  = "80%";
    this.Video.style.height = "25%";
    this.Video.style.display = "block";
    this.Video.style.margin = "auto";
    this.Video.style.marginTop = "2%";
    this.Video.style.marginBottom = "2%";
    this.Video.style.paddingLeft = "5%";
    this.Video.style.paddingRight = "5%";
    this.Video.style.paddingTop = "2%";
    this.Video.style.paddingBottom = "2%";

    this.Video.style.marginTop = "3%";
    this.Video.style.float  = "center";

    this.Video.style.backgroundColor = "rgba(0,0,0,0.4)";
    this.Video.style.overflow = "hidden";
    this.Video.style.borderRadius = "25px";

    this.Video.controls = "true";
    this.Video.autoplay = true;


    this.Question.style.backgroundColor = "rgba(0,0,0,0.4)";
    this.Question.style.marginLeft = "5%";
    this.Question.style.borderRadius = "25px";
    this.Question.style.width = "90%";
    this.Question.style.height = "auto";
    this.Question.style.marginTop = "4%";
    this.Question.style.paddingTop = "2%";
    this.Question.style.paddingBottom = "2%";
    this.Question.style.fontSize = "60px";
    this.Question.style.textAlign = "center";





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
  window.TossBetaError();
  /*document.getElementById("Title").innerHTML = "Medium";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let MediumData = window.Data.Quizzes.Medium;

  for(var items in MediumData) {
    let Block = new MenuBlock(items, MediumData[items]);
    Block.Elem.onclick = function(x){window.LoadQuizPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);
  }
  */
}

//Hard
window.LoadHard = function(){
  window.TossBetaError();
  /*
  document.getElementById("Title").innerHTML = "Hard";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let HardData = window.Data.Quizzes.Hard;

  for(var items in HardData) {
    let Block = new MenuBlock(items, HardData[items]);
    Block.Elem.onclick = function(x){window.LoadQuizPage(x.path[1].id)}

    document.getElementById("DataHolder").appendChild(Block.Elem);
  } */
}

window.LoadQuizPage = function(Quiz){
  //QwQ
  if(Quiz != "Easy-Quiz" || Quiz == "DataHolder"){

    window.TossBetaError();

  } else {

    document.getElementById("Title").innerHTML = Quiz.replace(/-/g, " ");

    let NewData = null;

    //Wipe data holder
    document.getElementById("DataHolder").innerHTML = "";

    //Check for quiz
    if(window.Data.Quizzes.Easy.hasOwnProperty(Quiz)){
      NewData = window.Data.Quizzes.Easy[Quiz];
    }
    if(window.Data.Quizzes.Medium.hasOwnProperty(Quiz)){
      NewData = window.Data.Quizzes.Medium[Quiz];
    }
    if(window.Data.Quizzes.Hard.hasOwnProperty(Quiz)){
      NewData = window.Data.Quizzes.Hard[Quiz];

    }

    if(NewData != null){
      //Create wiki page
      let Page = new QuizPageBlock(Quiz, NewData);
      document.getElementById("DataHolder").appendChild(Page.Elem);
    }
  }
}
