//Load Coaching

class Request{

  consrtuctor(Request){
    //Set up variables
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

    this.Style();
  }

  Style(){
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




}
window.LoadVods = function(){
  document.getElementById("Title").innerHTML = "Vods";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();
}
