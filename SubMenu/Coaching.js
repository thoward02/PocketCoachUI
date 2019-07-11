//Load Coaching

class RequestedCoach{

  constructor(Request){
    //Set up variables
    console.log(Request)
    this.Author         = Request.Author;
    this.AuthorImg      = Request.AuthorImg;
    this.Title          = Request.Title;
    this.Description    = Request.Author;
    this.Upvotes        = Request.Upvotes;

    //Create
    this.Elem           = document.createElement("div");

    this.Header         = document.createElement("div");
    this.TitleDiv       = document.createElement("div");
    this.AuthorDiv      = document.createElement("div");
    this.AuthorImgDiv   = document.createElement("div");

    this.Body           = document.createElement("div");
    this.DescriptionDiv = document.createElement("div");
    this.UpvotesDiv     = document.createElement("div");
    this.UpvoteButton   = document.createElement("div");

    //Append
    this.Header.appendChild(this.TitleDiv);
    this.Header.appendChild(this.AuthorImgDiv);

    this.Body.appendChild(this.AuthorDiv);
    this.Body.appendChild(this.DescriptionDiv);
    this.Body.appendChild(this.UpvotesDiv);
    this.Body.appendChild(this.UpvoteButton);

    this.Elem.appendChild(this.Header)
    this.Elem.appendChild(this.Body)

    document.getElementById("DataHolder").appendChild(this.Elem);

    this.Style();
  }

  Style(){

    this.Elem.style.width           = "80%";
    this.Elem.style.height          = "20%";
    this.Elem.style.margin          = "10%";
    this.Elem.style.borderRadius    = "25px";
    this.Elem.style.backgroundColor = "rgba(0,0,0,0.2)";
    this.Elem.style.overflow        = "hidden"

    this.Header.style.width         = "100%";
    this.Header.style.height        = "2  0%";
    this.Header.style.backgroundColor = "rgba(0,0,0,0.5)"



    //   ********************************************
    //   *  <IMG>    <         NAME         >       *
    //   ********************************************
    //   *     <                             >      *
    //   *     <             DESC            >      *
    //   *     <                             >      *
    //   *                                          *
    //   *                   <upvotes><upvoteButton>*
    //   ********************************************




  }


}


window.LoadRequests = function(){
  document.getElementById("Title").innerHTML = "Requests";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let TestData = {
    "Author" : "Taylor Howard",
    "AuthorImg" : "https://lh3.googleusercontent.com/a-/AAuE7mB1bAC1dNEezCqDZYixhshuy8y8tyK1i6IqFOKjhQ=s96",
    "Title" : "Testinggg",
    "Description" : "There once was a boy named harry who was born with an interesting scar",
    "Upvotes" : "602"
  }

  let testelem = new RequestedCoach(TestData);


}
window.LoadVods = function(){
  document.getElementById("Title").innerHTML = "Vods";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();
}
