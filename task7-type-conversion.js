/** Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. */


function romanToInt(romanNumeral) {
    const romanNumeralsMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentDigit = romanNumeralsMap[romanNumeral[i]];
      const nextDigit = romanNumeralsMap[romanNumeral[i + 1]];
  
      if (nextDigit > currentDigit) {
        result += (nextDigit - currentDigit);
        i++; 
      } else {
        result += currentDigit;
      }
    }
  
    return result;
  }
  
  // Test the function
  const romanNumeral1 = "IX";
  const romanNumeral2 = "XXI";
  const result1 = romanToInt(romanNumeral1);
  const result2 = romanToInt(romanNumeral2);
  console.log(result1); 
  console.log(result2); 
  