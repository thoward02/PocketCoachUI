//Easy
class QuizPageBlock{

  constructor(Title, DataBlock){
    this.Title                 = Title;
    this.DescText              = DataBlock.Description;
    this.ImageSrc              = DataBlock.Image;

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
      let Type = DataBlock.Content.Body[items][0];
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
}
