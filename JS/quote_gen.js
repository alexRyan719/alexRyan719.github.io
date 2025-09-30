// There are those that call me...Tim?

document.getElementById("newQuoteForm").style.display = "none";
// document.getElementById("addQuote").style.display = "none";

var quoteArray = ["String one", "String two", "String three", "String four"];
var quoteIndex = 1;

var person = {
  firstName:"John", 
  lastName:"Doe", age:50, eyeColor:"blue"};

var qObs0 = {
  quote: "Computers are useless.  They can only give you answers.",
  author: "Pablo Picasso",
  index: 0
};
var qObs1 = {
  quote: "Computers are like bikinis. They save people a lot of guesswork.",
  author: "Sam Ewing",
  index: 1
};
var qObs2 = {
  quote: "That’s what’s cool about working with computers.  They don’t argue, they remember everything, and they don’t drink all your beer.",
  author: "Paul Leary",
  index: 2
};
var qObs3= {
  quote: "The Internet?  Is that thing still around?",
  author: "Homer Simpson",
  index: 3
};
var qObs4 = {
  quote: "Any fool can use a computer.  Many do.",
  author: "Ted Nelson",
  index: 4
};

var obsArray = [qObs0, qObs1, qObs2, qObs3, qObs4];

document.getElementById("quotebox").innerHTML = "\"" +obsArray[0].quote + "\"  -" + obsArray[0].author;

function tweetQuote(){
  return "\"" +obsArray[quoteIndex].quote + "\"  -" + obsArray[quoteIndex].author;
}

function clickFunc(){
  if(quoteIndex == obsArray.length){quoteIndex = 0;}
  document.getElementById("quotebox").innerHTML = "\"" + obsArray[quoteIndex].quote + "\"   -"  + obsArray[quoteIndex].author;
  switch(quoteIndex % 5) {
    case 0:
        document.getElementById("quotebox").style.color = "blue";
        document.getElementById("quotebox").style.backgroundColor = "orange";
        document.getElementById("theBody").style.backgroundColor = "blue";
        break;
    case 1:
        document.getElementById("quotebox").style.color = "green";
        document.getElementById("quotebox").style.backgroundColor = "yellow";
        document.getElementById("theBody").style.backgroundColor = "green";
        break;
    case 2:
        document.getElementById("quotebox").style.color = "brown";
        document.getElementById("quotebox").style.backgroundColor = "silver";
        document.getElementById("theBody").style.backgroundColor = "brown";
        break;
    case 3:
        document.getElementById("quotebox").style.color = "purple";
        document.getElementById("quotebox").style.backgroundColor = "yellow";
        document.getElementById("theBody").style.backgroundColor = "purple";
        break;
    case 4:
        document.getElementById("quotebox").style.color = "yellow";
        document.getElementById("quotebox").style.backgroundColor = "black";
        document.getElementById("theBody").style.backgroundColor = "yellow";
        break;

} 
  quoteIndex++;
}

function showDiv() {
  document.getElementById('newQuoteForm').style.display = "block";
}

function addQuote(){
  var qObs4 = {
  quote: "This is a test quote",
  author: "A-Rye",
  index: 4
};
  quoteIndex++;
  obsArray.unshift(qObs4);
}
// Validating Empty Field
// function check_empty() {
//   if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
//     alert("Fill All Fields !");
//   } else {
//     document.getElementById('form').submit();
//     alert("Form Submitted Successfully...");
//   }
// }


//Function To Display Popup
// function altDiv(){
//   if()
// }


//Function to Hide Popup
// function hideDiv(){
//   document.getElementById('newQuoteForm').style.display = "none";
// }
// twttr.events.bind(
//   'click',
//   function (ev) {
//     console.log(ev);
//   }
// );
