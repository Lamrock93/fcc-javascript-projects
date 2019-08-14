	// This program takes a string and performs a ROT13 cipher on it, shifting each letter 13 places forward in the library. Because 13 is exactly half the library, I can create two arrays with inputs that correspond to each other. An empty string that will be our decoded version is created. The rot13 function reads the string from left to right, one character at a time. For each character, it checks for a match in the alpha [A-M] array and beta [N-Z] array. If a match is found in the alpha array, the corresponding character (same index) from the beta array is concatenated to the decoded string. If not, it will check for a match in the beta array, and append the corresponding alpha character if so. If no match is found in either array (detected by checking the string length against its place in the array), it will pass on the original value from the string.

	function rot13(str) {
	
		const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']; // create array representing first half of alphabet
		const beta = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // create array representing second half of alphabet
		let decodedStr = ""; // this string will hold decoded output
	
		for (var i = 0; i < str.length; i++) { // loop will check all characters in string

			for (var j = 0; j < 13; j++) { // each character will search for match in each alphabet array
				if (str[i] == alpha[j]) {
					decodedStr += beta[j]; // if match found at alpha[j], add beta[j] to string
				} else if (str[i] == beta[j]) {
					decodedStr += alpha[j]; // if match found at beta[j], add alpha[i] to string
				  }
			  }

				if (decodedStr.length == i) { // checks if string was added by checking its length
					decodedStr += str[i]; // if neither alpha or beta are found, pass on character str[i]
					}
				}
        
		return decodedStr;
	}
