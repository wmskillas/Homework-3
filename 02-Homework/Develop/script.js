var chooseNumber;
var chooseCharacter;
var chooseUpperCase;
var chooseLowerCase;
var chooseLength;

var characters = ["!", "@", "#", "$", "%", " ^ ", "&", "*","(", ")", "+", ",", "-", ".", "/", ":", ";", "'", " < ", "=", " > ", " ? ", "[", "]", "_", "", "|", "}", "~"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(characters);
console.log(numbers);
console.log(upperCase);
console.log(lowerCase);

function generatePassword(){
  chooseLength = prompt("Please choose 8 to 128 Characters for your Passsword!");
  if (chooseLength <= 7 || chooseLength >=127){
    alert("Please choose 8 to 128");
  }
  else {
    chooseNumber = confirm("Do you want numbers?");
    chooseCharacter = confirm("Do you want special characters?");
    chooseUppercase = confirm("Do you want Uppercase letters?");
    chooseLowercase = confirm("Do you want Lowercase letters?");
  };

  if (!chooseNumber && !chooseCharacter && !chooseUpperCase && !chooseLowerCase){
    choose = alert("Well what would you like this made of then cause thats all I got")
  }

  //write the logic of you code in here
  //whatever value is returned from this function with then be stored in the password variable
  // password += // look up +=
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



