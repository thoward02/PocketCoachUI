//Load Coaching

class RequestedCoach{

  constructor(Request){
    //Set up variables
    this.Author         = Request.Author;
    this.AuthorImg      = Request.AuthorImg;
    this.Title          = Request.Title;
    this.Description    = Request.Description;
    this.Upvotes        = Request.Upvotes;

    //Create
    this.Elem           = document.createElement("div");

    this.Header         = document.createElement("div");
    this.TitleDiv       = document.createElement("div");
    this.AuthorDiv      = document.createElement("div");
    this.AuthorImgDiv   = document.createElement("img");

    this.Body           = document.createElement("div");
    this.DescriptionDiv = document.createElement("div");
    this.UpvotesDiv     = document.createElement("div");
    this.UpvoteButton   = document.createElement("div");
    this.UpvotePicture  = document.createElement("img");

    //Fill
    this.AuthorImgDiv.src         = this.AuthorImg;
    this.UpvotePicture.src        = "./Resources/heart.svg";

    this.TitleDiv.innerHTML       = this.Title;
    this.AuthorDiv.innerHTML      = "Author: " + this.Author

    if(this.Description.length > 133){
      let Text = ""
      for(var x = 0; x < 133; x++){
        Text += this.Description[x];
      }
      Text += "..."
      this.DescriptionDiv.innerHTML = Text;
    }else{
      this.DescriptionDiv.innerHTML = this.Description;

    }

    this.UpvotesDiv.innerHTML     = this.Upvotes;


    //Append
    this.Header.appendChild(this.AuthorImgDiv);
    this.Header.appendChild(this.TitleDiv);

    this.Body.appendChild(this.AuthorDiv);
    this.Body.appendChild(this.DescriptionDiv);
    this.Body.appendChild(this.UpvotesDiv);
    this.Body.appendChild(this.UpvoteButton);

    this.UpvoteButton.appendChild(this.UpvotePicture)

    this.Elem.appendChild(this.Header)
    this.Elem.appendChild(this.Body)

    document.getElementById("DataHolder").appendChild(this.Elem);

    this.Style();
  }

  Style(){

    this.Elem.style.width           = "90%";
    this.Elem.style.height          = "30%";
    this.Elem.style.margin          = "5%";
    this.Elem.style.borderRadius    = "25px";
    this.Elem.style.color           = "#D5FFF9"
    this.Elem.style.fontFamily      = "Montserrat"
    this.Elem.style.backgroundColor = "rgba(0,0,0,0.2)";
    this.Elem.style.overflow        = "hidden"

    this.Header.style.width         = "100%";
    this.Header.style.height        = "20%";
    this.Header.style.backgroundColor = "rgba(0,0,0,0.5)"

    this.AuthorDiv.style.width      = "100%";
    this.AuthorDiv.style.height     = "10%";
    this.AuthorDiv.style.marginLeft = "1%";
    this.AuthorDiv.style.marginBottom = "2%";
    this.AuthorDiv.style.marginTop = "1%";
    this.AuthorDiv.style.fontWeight = "500";
    this.AuthorDiv.style.fontSize   = "35px";


    this.AuthorImgDiv.style.width = "10%"
    this.AuthorImgDiv.style.height = "80%"
    this.AuthorImgDiv.style.margin = "1%"
    this.AuthorImgDiv.style.float = "left"
    this.AuthorImgDiv.style.borderRadius = "5px"

    this.TitleDiv.style.float         = "left";
    this.TitleDiv.style.marginTop     = "3%";
    this.TitleDiv.style.fontWeight     = "500";
    this.TitleDiv.style.fontSize      = "30px"

    this.DescriptionDiv.style.margin  = "1%";
    this.DescriptionDiv.style.fontSize  = "30px";

    this.Body.style.height          = "80%";
    this.Body.style.width           = "100%";
    this.Body.style.width           = "100%";
    this.Body.style.position        = "relative";

    this.UpvoteButton.style.position  = "absolute";
    this.UpvoteButton.style.height  = "10%";
    this.UpvoteButton.style.width  = "10%";
    this.UpvoteButton.style.bottom  = "14%";
    this.UpvoteButton.style.right  = "5%";
    this.UpvoteButton.style.marginRight = "1%"

    this.UpvotePicture.style.width  = "50%";
    this.UpvotePicture.style.height = "100%";

    this.UpvotesDiv.style.position  = "absolute";
    this.UpvotesDiv.style.height  = "10%";
    this.UpvotesDiv.style.width  = "10%";
    this.UpvotesDiv.style.bottom  = "16%";
    this.UpvotesDiv.style.right  = "0";



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
class Vods{

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

    this.Picture.src = "./Resources/Heroes/winston.png"

    //Append
    this.Elem.appendChild(this.Picture);
    this.Elem.appendChild(this.Header);
    this.Elem.appendChild(this.Description);

    document.getElementById("DataHolder").appendChild(this.Elem);

    this.Elem.onclick = function(){
      window.open('http://stackoverflow.com', '_blank');
    }
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
      this.Elem.style.borderWidth = "0";

      //Setup picture
      this.Picture.style.width      = "30%";
      this.Picture.style.height     = "100%";

      this.Picture.style.float      = "left";
      this.Picture.style.margin     = "0";
      this.Picture.style.padding    = "0";


      //Setup Header
      this.Header.style.textAlign   = "left";
      this.Header.style.marginTop   = "2%";
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


window.LoadRequests = function(){
  document.getElementById("Title").innerHTML = "Requests";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let TestData = {
      "1" : {
        "Author" : "At0m",
        "AuthorImg" : "https://lh3.googleusercontent.com/a-/AAuE7mB1bAC1dNEezCqDZYixhshuy8y8tyK1i6IqFOKjhQ=s96",
        "Title" : "[COACHING REQUEST] Can't climb past 2800",
        "Description" : "I've been main tanking for two years now, and I've climbed all the way from silver, but I just can't seem to climb higher than 2800! I keep loosing games against effective dps players. Can someone run through my play and see if I'm not protecting my team enough // providing enough space for them todo their work?",
        "Upvotes" : "4K"
      },
      "2" : {
        "Author" : "K1yle",
        "AuthorImg" : "https://www.pngkey.com/png/detail/24-243377_overwatch-symbol-png-steering-wheel.png",
        "Title" : "[COACHING REQUEST] 4K Hamster tricks",
        "Description" : "Any coaches looking to teach a 4.2K SR player how to play hamster at a 4K level? I want to be able to have a larger hero pool for my main tank line.",
        "Upvotes" : "3.6K"
      },
      "3" : {
        "Author" : "Aud",
        "AuthorImg" : "https://cdn.discordapp.com/icons/572176692752416778/1bb79fe9f22de6fd68ca095ef03d0e17.webp?size=128",
        "Title" : "[PLAYER REQUEST] 4.5K Main Support",
        "Description" : "Looking to get some work done with a 4.5K main support, whether it be in scrims or ladder play",
        "Upvotes" : "2.8K"
      }
    }
  for(var items in TestData){
    let testelem = new RequestedCoach(TestData[items]);
  }




}
window.LoadVods = function(){
  document.getElementById("Title").innerHTML = "Vods";
  document.getElementById("DataHolder").innerHTML = "";
  document.getElementById("AppHolder-BlackBox").onclick();

  let TestData2 = {

    "Vod1" : {
      "Title" : "Jayne coaches 2.7K Zen",
      "Description" : "Jayne goes through the details of playing Zen at a pro level, inorder to help push this 2.7K Zen farther in his play." ,
      "Image" : "https://i.ytimg.com/vi/WQ0MAmkHH-Y/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCT3_0wUBR8D1DEHF3-pKEvs9paVg",
      "Link" : "https://www.youtube.com/watch?v=WQ0MAmkHH-Y"
    }

  }
  for(var items in TestData2){
    let x = new Vods(TestData2[items].Title, TestData2[items])
  }

}
