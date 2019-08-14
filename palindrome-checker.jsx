// This program checks to see if letters and numbers in a string make a palindrome. First, the program uses a regular expression function that checks for letters and numbers, and removes all other characters. It then uses for loops to cycle through the filtered set of characters to build forward and backward strings. Finally, it checks if those two strings (when set to lower case) are identical, returning a Boolean result.

function palindrome(str) {
  
  let userInput = str; // pulls from user input
  let alphaRegex = /[a-z0-9]/gi; // scans for letters and numbers only
  let myText = userInput.match(alphaRegex); // removes special characters
  
  // INITIATE WORD VARIABLES
  let forwardText = "";
  let backwardText = "";
  
  // GENERATE FORWARD TEXT
  for (var i=0; i < myText.length; i++){
    var firstLetter = myText[i];
    forwardText += firstLetter;
    }
    
  // GENERATE BACKWARD TEXT
  for (var i=0; i < myText.length; i++){
    var lastLetter = myText[myText.length - i - 1];
    backwardText += lastLetter;
    }

  // SET TEXT TO LOWER CASE, CHECK FOR MATCH
  if (forwardText.toLowerCase() == backwardText.toLowerCase()) {
    return true;
    } else {
      return false;
      }
  }
