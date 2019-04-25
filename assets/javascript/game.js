       
var computerChoices = ["Soul For Real", "Michael Jackson", "Faith Evans", "702", "Shai", "K Ci & Jojo", "R. Kelly", "Destiny Child", "Fugees", "Silk", "Color me Badd", "Shanice", "Lisa Stansfield", "Tony Toni Tone", "Jade", "Keith Sweat", "Aaron Hall", "Johnny Gill", "Jodeci", "Brandy", "Monica", "Usher", "SWV", "Mary J Blige", "Montell Jordan", "Blackstreet", "Dr Dre", "Snoop Dogg", "xscape", "Puff Daddy", "Mint Condition", "Jagged Edge", "Jennifer Lopez", "Heavy D", "Guy", "Tupac", "Jay Z", "Next", "Beyonce", "112", "En Vogue", "Sade", "Dru Hill", "Lauryn Hill", "Whitney Houston", "Boyz II Men", "Santana", "Luther Vandross", "Mark Morrison", "Joe", "Babyface", "Tina Turner", "Tevin Cambell", "Tyrese"];
var userInput = [];
var wins = 0;
var losses = 0;
var guesses = 5;

function myFunction() {
  var userText = document.getElementById("user-text");
  style.background = "yellow";
  userInput.push(userText);
  // userText.value = userText.value.toUpperCase();
  // document.onkeyup = function(event) {
//     userText.textContent = event.key;
};
  function confirmInput() {
    userText = document.forms[0].userText.value;
  }

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.getElementById("total-wins").textContent = "Wins = " + wins;
document.getElementById("total-losses").textContent = " Loses = " + losses;
document.getElementById("total-guesses").textContent = " Guesses = " + guesses;
document.getElementById("column3text").innerHTML = computerGuess;

