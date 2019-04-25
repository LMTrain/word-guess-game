       
var computerChoices = ["Soul For Real", "Michael Jackson", "Faith Evans", "702", "Salt n Pepa", "Shai", "K Ci & Jojo", "R. Kelly", "Destiny Child", "Fugees", "Silk", "Color me Badd", "Shanice", "Lisa Stansfield", "Tony Toni Tone", "Jade", "Keith Sweat", "Aaron Hall", "Johnny Gill", "Jodeci", "Brandy", "Monica", "Usher", "SWV", "Mary J Blige", "Montell Jordan", "Blackstreet", "Dr Dre", "Snoop Dogg", "xscape", "Puff Daddy", "Mint Condition", "Jagged Edge", "Jennifer Lopez", "Heavy D", "Guy", "Tupac", "Jay Z", "Next", "Beyonce", "112", "En Vogue", "Sade", "Dru Hill", "Lauryn Hill", "Whitney Houston", "Boyz II Men", "Santana", "Luther Vandross", "Mark Morrison", "Joe", "Babyface", "Tina Turner", "Tevin Cambell", "Tyrese"];
// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var userInput = [];
var userInputL = [];
var computerGuessR = [];
var userInputN = -1;
var wins = 0;
var losses = 0;
var guesses = 5;

function startFunction() {
  // location.reload(true);
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  document.getElementById("artist-is").innerHTML = "Computer Guess Artist is:";
  document.getElementById("computer-guess-block").innerHTML = computerGuess;
  console.log(computerGuess + " -- This Computer Guess");
  computerGuessR.push(computerGuess);
  // document.getElementById("computer-guess").innerHTML = computerGuess;
  document.getElementById("user-text-input").innerHTML = "Type in Your Guess Artist click Submit:";
  document.getElementById("total-wins").textContent = "Wins = " + wins;
  document.getElementById("total-losses").textContent = " Loses = " + losses;
  document.getElementById("total-guesses").textContent = " Guesses = " + guesses;
  // document.getElementById("submit-button").innerHTML =<button onclick="myFunction()">Submit</button>;
  // <button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>
};
function myFunction() {
  document.getElementById("computer-guess").innerHTML = computerGuess;
  var userText = document.getElementById("user-text").value;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  document.getElementById("computer-guess-block").innerHTML = computerGuess;
  userInput.push(userText);
  userInputN = userInputN + 1;
  console.log(userInput[userInputN] + "  Array # = " + userInputN);
  document.getElementById("user-input").innerHTML = userInput[userInputN];
  console.log(computerGuess + " -- This Computer Guess");
  document.getElementById("computer-guess").innerHTML = computerGuessR[userInputN];
  document.getElementById("user-text").value = '';
  // style.background = "yellow";
  // userInputL = userText.value;
  // console.log(userInputL);
  // userText.value = userText.value.toUpperCase();
  // document.onkeyup = function(event) {
//     userText.textContent = event.key;
};

  // function confirmInput() {
  //   userText = document.forms[0].userText.value;
  

// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// document.getElementById("total-wins").textContent = "Wins = " + wins;
// document.getElementById("total-losses").textContent = " Loses = " + losses;
// document.getElementById("total-guesses").textContent = " Guesses = " + guesses;
// document.getElementById("column3text").innerHTML = computerGuess;
// document.getElementById("computer-guess-block").innerHTML = computerGuess;
// document.getElementById("computer-guess").innerHTML = userInputL;



