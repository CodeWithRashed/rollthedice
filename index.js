

function rollDice() {
    
    var randomNumberPlOne = Math.floor( (Math.random() * 6) + 1 );
    var diceImgForPlOne = "dice" +randomNumberPlOne +".png"
    
    var randomNumberPlTwo = Math.floor( (Math.random() * 6) + 1 );
    var diceImgForPlTwo = "dice" +randomNumberPlTwo +".png"

    document.querySelector(".img1").setAttribute("src", diceImgForPlOne);
    document.querySelector(".img2").setAttribute("src", diceImgForPlTwo);

if (randomNumberPlOne > randomNumberPlTwo ) {

    document.querySelector("h1").textContent = "Player One Win 🏆"

} else if  (randomNumberPlOne === randomNumberPlTwo ) {
    document.querySelector("h1").textContent = "It's A Tie 💯"
} else {
    document.querySelector("h1").textContent = "Player Two Win 🏆"
}
  }

  window.onbeforeunload = function() {
    rollDice();
  };
  


  window.onload = function() {
    rollDice();
  };
  
