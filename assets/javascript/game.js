

/* <script type="text/javascript"> */

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
/* var computerChoices = ["r", "p", "s"]; */
var computerChoices = ["Soul For Real", "Michael Jackson", "Faith Evans", "702", "Shai", "K-Ci & Jojo", "R. Kelly", "Destiny Child", "Fugees", "Silk", "Color me Badd", "Shanice", "Lisa Stansfield", "Tony Toni Tone", "Jade", "Keith Sweat", "Aaron Hall", "Johnny Gill", "Jodeci", "Brandy", "Monica", "Usher", "SWV", "Mary J Blige", "Montell Jordan", "Blackstreet", "Dr Dre", "Snoop Dogg", "xscape", "Puff Daddy", "Mint Condition", "Jagged Edge", "Jennifer Lopez", "Heavy D", "Guy", "Tupac", "Jay Z", "Next", "Beyonce", "112", "En Vogue", "Sade", "Dru Hill", "Lauryn Hill", "Whitney Houston", "Boyz II Men", "Santana", "Luther Vandross", "Mark Morrison", "Joe", "Babyface", "Tina Turner", "Tevin Cambell", "Tyrese"] 
var wins = 0;
var losses = 0;
var ties = 0;
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key;
  if(!(userGuess==="p"||userGuess==="r"||userGuess==="s")){
    return;
  }

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Alerts the key the user pressed (userGuess).
  // alert("You the dumb human guessed: " + userGuess);

  // Alerts the Computer's guess.
  // alert("Computer guess: " + computerGuess);

  var outcome = document.getElementById("outcome");
  
  if(userGuess === computerGuess){
    outcome.textContent = "Tie!";
    ties++;
  }else{
    if(userGuess === "r"){
      if(computerGuess === "p"){
        outcome.textContent = "You Lose!";
        losses++;
      }else if(computerGuess === "s"){
        outcome.textContent = "You Win!";
        wins++;
      }
    }else if(userGuess === "p"){
      if(computerGuess ==="s"){
        outcome.textContent = "You Lose";
        losses++;
      }else if(computerGuess ==="r"){
        outcome.textContent = "You Win";
        wins++;            
      }
    }else if(userGuess === "s"){
      if(computerGuess ==="r"){
        outcome.textContent = "You Lose";
        losses++;
      }else if(computerGuess ==="p"){
        outcome.textContent = "You Win";
        wins++;            
      }
    }
  }

  document.getElementById("total-wins").textContent = wins;
  document.getElementById("total-losses").textContent = losses;
  document.getElementById("total-ties").textContent = ties;

};
// </script>
  