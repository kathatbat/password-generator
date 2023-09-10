// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var uppercase= confirm("Do you want your password to include uppercase letters?");
  var lowercase= confirm("Do you want your password to have lowecase letters?");
  var specialcharacters= confirm("Do you want your password to have special characters?");
  var numbers= confirm("Do you want your password to have numbers?");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
