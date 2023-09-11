// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //prompt user to specify length of password
  let length= prompt("Length of password?");
  if (length < 8 || length > 128) {
    alert("Your password must be 8-128 characters.");
  }
  //confirm if lowercase
  var lowercase= confirm("Include lowercase characters?");
  //confirm if uppercase
  var uppercase= confirm("Include uppercase?");
  //confirm if numbers
 var numbers= confirm("Include numbers?");
  //confirm if special characters
  var special= confirm("Include special characters?");
  if (lowercase === false && uppercase === false && numbers === false && special === false) {
    return "Your password does not meet the criteria."
  }
  //return password
var numeric = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialC = "!@#$%^&*()?.<>/|=+:;,[-_]";
var MultiS = [];
  if (numbers) {MultiS += numeric};
  if (lowercase) {MultiS += lowerCase};
  if (uppercase) {MultiS += upperCase};
  if (special) {MultiS += specialC};

var password = ""
  for (let i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * MultiS.length);
    password = password + MultiS[randomNumber];
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
