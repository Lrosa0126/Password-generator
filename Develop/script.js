// Assignment code here




function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "~!@#$%^&*()-=`";
  var allChars = "";
  var password = "";

  var passwordLength = prompt("Please state how many characters you would like, MUST BE between 8 and 128 characters");
  var upperCase = confirm("Would you like to include UPPERCASE letters to your password?");
  var lowerCase = confirm ("Would you like to include lowercase letters to your password?");
  var numeric = confirm("Would you like to include numbers to your password?");
  var specialChar = confirm("Would you like to include special characters to your password? (Ex. ~!@#$%^&*()-=`");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("ERROR. Please choose a number between 8 and 128");
    return null;
  }

  if (!upperCase && !lowerCase && !specialChar) {
    alert("ERROR. Please select atleast one type of character");
    return null;
  }

  if (lowerCase) {
    allChars += lowercaseChars;
  }
  
  if (upperCase) {
    allChars += uppercaseChars;
  }
  
  if (numeric) {
    allChars += numbers;
  }
  
  if (specialChar) {
    allChars += specialCharacters;
  }
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  
  return password;
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
