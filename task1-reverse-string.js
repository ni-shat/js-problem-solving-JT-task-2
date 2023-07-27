function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Test the function
const inputString = 'Hello, World!';
const reversedString = reverseString(inputString);
console.log(reversedString); 
