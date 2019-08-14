// This program takes a string given, and checks if it is a valid phone number. It does so by screening the number through a number of tests, cleaning it up a bit in the process. First, it uses a regular expression to capture all of the digits in the string into its own array. If there are 11 digits, it checks for the correct country code (1), removes the first character from the string, removes white space and updates the digit array. If, at this point, the number of digits is not 10, it will return false. If the number of characters is also ten, the number is validated and it returns true. Otherwise, we if parentheses are in acceptable places, removing them if so, and check that hyphens and spaces are where they should be. If it still hasn't returned false, it has passed all tests and is validated.

function telephoneCheck(str) {
  let numRegex = /[0-9]/g; // regex detects all digits in a string
  let digits = str.match(numRegex); // all digits stored in an array
  let newStr = str; // this new string will be modified over time for testing purposes
  
  if (digits.length == 11) { // if it is an eleven digit number, test the country code
  if (digits[0] == 1) { // if first digit is 1...
  newStr = str.substring(1, str.length) // removes first character from string, likely the country code
  digits = newStr.match(numRegex); // digits array updated, will still have length 11 if first character in str isn't a digit.. if so will eventually return false, as it should (see line 17)
  } else { // if country code is not 1...
    return false; // test fails
    }
  }
  
  newStr = newStr.trim(); // removes any whitespace there might be from beginning, end
  if (digits.length != 10) { // if there aren't 10 digits at this point...
    return false; // test fails
    }
  if (newStr.length == 10) { // if string is just ten digits, it passes all tests
    return true;
    }
    
  if (newStr[0] == "(" && newStr[4] == ")") { // if area code parentheses are in right place, remove first one
    let areaCode = newStr.slice(1, 4); // extract area code from newStr
    newStr = areaCode + newStr.substring(5, newStr.length); // remove parentheses from newStr
    }
    
  // With all 10 digit numbers accounted for, country codes removed, white space trimmed and properly placed area code parenthese removed, we just need to check for spaces and dashes
  if (newStr[3] != "-" && newStr[3] != " ") { // if there is no space or dash at index 3...
    if (newStr[6] != "-" && newStr[6] != " ") { // ...or index 6...
      return false; // return false because it can't be a valid phone number
      }
    }
    return true; // if the number has not failed any tests, we return true
  }
