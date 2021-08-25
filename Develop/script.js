// Assignment code here

var special = ['!','@','$','%','&','*','+'];
var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = [0,1,2,3,4,5,6,7,8,9];
var allPossible = [];

function userPrompt () {
  //Password length
  var passLength = prompt ('How long do you want you password to be? [8-128]');
  //special character, numbers, letters
  var symbolCharacter = confirm ('Do you want a special character in your password?');
  var numberCharacter = confirm ('Would you like numbers in your password?');
  var letterCharacter = confirm ('Would you like letters in your password?');
  
  return {
    passLength,symbolCharacter,numberCharacter,letterCharacter
  }
}  

function generatePassword(options) {
  var password = [];
  console.log (options)

  if (options.symbolCharacter === true) {
    console.log ('I am here')
    allPossible = allPossible.concat(special);
  }
  if (options.numberCharacter === true) {
    allPossible = allPossible.concat(number);
  }
  if (options.letterCharacter === true) {
    allPossible = allPossible.concat(letter);
  }
  console.log (allPossible)

  for(var i = 0; i <= options.passLength; i++) {
    password.push(allPossible[randomGen()]);
  }
  return password
}

function randomGen() {
  var randomNum = Math.floor(Math.random()*allPossible.length)

  console.log (randomNum)
  return randomNum;
}
//

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var userAnswer = userPrompt();
  var password = generatePassword(userAnswer);
  var passwordStr = password.join('');
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordStr;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
