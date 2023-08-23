const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your solution here
  let middle = Math.floor(sentence.length / 2)

  let palindromeCheck = new Stack()

  for (let i = 0; i < middle; i++) {
    palindromeCheck.push(sentence[i])
  }

  let secondHalfStart = middle + (sentence.length % 2 === 0 ? 0 : 1)

  for (let i = secondHalfStart; i < sentence.length; i++) {
    let poppedChar = palindromeCheck.pop()
    if (sentence[i] !== poppedChar) {
      return false
    }
  }
  return true
};

module.exports = isPalindrome;
