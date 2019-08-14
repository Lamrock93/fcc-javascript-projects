// This program converts any given positive integer (num) into a roman numeral. An empty string romanNum that will contain our numeral is created, as are arrays holding the seven possible letters and their corresponding values in corresponding indexes. A while loop is used to handle the first six letters (in descending order), while the "I" values are handled with a brief for loop at the end. The program works by cycling through all the Roman numeral values from largest to smallest - num is divided by the value of that numeral, and the result less the remainder times that value is subtracted from num, and the appropriate number of that numeral is concatenated to the romanNum string.
// The while loop runs three times, taking advantage of the pattern in the numeral values array: the following value alternates between being one half and one fifth the amount of the preceding one. For this reason, the I must be handled separately, but we can otherwise look ahead 1-2 places in the array to handle subtractive notation, and deal with two numerals at a time. Once the program has finished running, the num value will be at 0 (well, no larger than 3), and a roman numeral representing the number given will be returned.

function convertToRoman(num) {
  
  // creation of empty string, numeral string values, and integer values
  let romanNum = "";
  let charLetters = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let charValues = [1000, 500, 100, 50, 10, 5, 1];
  let i = 0; // (because we're using a while loop, declare this here)
  
  while (i < 5) { // i will equal 0, 2 and 4

    var toAdd = 0; // how many of first numeral to add, resets to 0 each time while loop runs
    toAdd = Math.floor(num/charValues[i]); // divides num by the corresponding numeral value, less its remainder
    num -= (charValues[i] * toAdd); // subtracts that numeral value times the amount from num
    for (var j = 0; j < toAdd; j++) { // adds as many of those numerals as needed
      romanNum += charLetters[i];
      }
      
    if (num >= charValues[i] - charValues[i+2]) { // check for subtractive notation! CM, XC, IX
      num -= (charValues[i] - charValues[i+2]); // subtract that amount from num
      romanNum += charLetters[i+2] + charLetters[i]; // add appropriate characters to string

      } else if (num >= charValues[i+1]) { // check for D, L, or V
        num -= (charValues[i+1]); // subtract that amount from num
        romanNum += charLetters[i+1]; // add appropriate characters to string

        } else if (num >= charValues[i+1] - charValues[i+2]) { // subtractive notation - CD, XL, IV
          num -= (charValues[i+1] - charValues[i+2]) // subtract amount from num
          romanNum += charLetters[i+2] + charLetters[i+1]; // add characters to string
          }
          
      i += 2; // proceed ahead two places in array
    }

  for (var k = 0; k < num; k++) { // if num still isn't 0...
    romanNum += charLetters[6]; // ...add the appropriate I values at the end
    }   
    
  return romanNum;
}
