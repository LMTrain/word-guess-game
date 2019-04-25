       
var computerChoices = ["Soul For Real", "Michael Jackson", "Faith Evans", "Salt n Pepa", "K Ci & Jojo", "    R. Kelly", "Destiny Child", "Fugees", "Color me Badd", "Shanice", "Lisa Stansfield", "Tony Toni Tone", "Jade", "Keith Sweat", "Aaron Hall", "Johnny Gill", "Jodeci", "    Brandy", "Monica", "Usher", "Mary J Blige", "Montell Jordan", "Blackstreet", "    Dr. Dre", "Snoop Dogg", "xscape", "Puff Daddy", "Mint Condition", "Jagged Edge", "Jennifer Lopez", "Heavy D", "Tupac", "Jay Z", "Beyonce", "En Vogue", "    Sade", "Dru Hill", "Lauryn Hill", "Whitney Houston", "Boyz II Men", "Santana", "Luther Vandross", "Mark Morrison", "    Joe", "Babyface", "Tina Turner", "Tevin Cambell", "Tyrese"];
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
  document.getElementById("submit-button").innerHTML = "Submit";
  computerGuessR.push(computerGuess);
  userInputN = userInputN + 1;
  console.log(computerGuess + " -- This Computer Guess " + "computerGuessR =  " + computerGuessR[userInputN] + "  userInputN =  " + userInputN);
  // document.getElementById("computer-guess").innerHTML = computerGuess;
  document.getElementById("user-text-input").innerHTML = "Complete Guess Artist Name, click Submit:";
  document.getElementById("total-wins").textContent = "Wins = " + wins;
  document.getElementById("total-losses").textContent = " Loses = " + losses;
  document.getElementById("total-guesses").textContent = " Guesses = " + guesses;
  userInputN = userInputN - 1;
  // document.getElementById("submit-button").innerHTML =<button onclick="myFunction()">Submit</button>;
  // <button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>
};
function myFunction() {
  guesses = guesses - 1;
  document.getElementById("total-guesses").textContent = " Guesses = " + guesses;
  document.getElementById("computer-guess").innerHTML = computerGuess;
  var userText = document.getElementById("user-text").value;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  document.getElementById("computer-guess-block").innerHTML = computerGuess;
  computerGuessR.push(computerGuess);
  userInput.push(userText);
  userInputN = userInputN + 1;
  console.log(userInput[userInputN] + "  userInput Array # =  " + userInputN);
  document.getElementById("user-input").innerHTML = userInput[userInputN];
  console.log(computerGuess + " -- This Computer Guess");
  document.getElementById("computer-guess").innerHTML = computerGuessR[userInputN];
  document.getElementById("user-text").value = '';
  
  if (userInput[userInputN] === computerGuessR[userInputN]) {
    console.log(userInput[userInputN] + "   " + computerGuessR[userInputN]);
    wins = wins + 1;
    document.getElementById("total-wins").textContent = "Wins = " + wins;
  }
  else if (userInput[userInputN] !== computerGuessR[userInputN]) {
    console.log(userInput[userInputN] + "   " + computerGuessR[userInputN]);
    losses = losses + 1;
    document.getElementById("total-losses").textContent = " Loses = " + losses;
  }

  if (guesses === 0) {
    gameOver()
  } 
  // style.background = "yellow";
  // userInputL = userText.value;
  // console.log(userInputL);
  // userText.value = userText.value.toUpperCase();
  // document.onkeyup = function(event) {
//     userText.textContent = event.key;
};

function gameOver() {
  document.getElementById("user-text-input").innerHTML = "GAME OVER!!!!!";
  document.getElementById("user-text").innerHTML = "GAME OVER!!!!!";
  document.getElementById("submit-button").innerHTML = "GAME OVER Click to Restart";
  // <button onclick=location.reload(true) </button>;

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



