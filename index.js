var possibleColors = ["blue","red","yellow","green","orange","purple","black","white"];

function checkGuessValid(guess) {
  if (guess.length !== 4) {
    return false;
  }
  for (var i = 0; i < guess.length; i++) {
    if (possibleColors.indexOf(guess[i]) === -1) {
      return false;
    }
  }
  var uniqueColors = [];
  for (var i = 0; i < guess.length; i++) {
    if (uniqueColors.indexOf(guess[i]) === -1) {
      uniqueColors.push(guess[i]);
    }
  }
  if (uniqueColors.length !== 4) {
    return false;
  }
  return true;
}

function isCorrect(guess, secret) {
  for (var i = 0; i < 4; i++) {
    if (guess[i] !== secret[i]) {
      return false;
    }
  }
  return true;
}

function playGame(secret) {
  var attempts = 12;
  while (attempts > 0) {
    var guess = ["blue","red","yellow","green"];
    if (!checkGuessValid(guess)) {
      console.log("Proposition invalide");
    } else {
      if (isCorrect(guess, secret)) {
        console.log("Bravo");
        return;
      } else {
        console.log("Mauvaise combinaison");
        attempts--;
      }
    }
  }
  console.log("Perdu");
}

function generateSecretCode() {
  var arr = possibleColors.slice();
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.slice(0, 4);
}

var secretCode = generateSecretCode();
playGame(secretCode);
