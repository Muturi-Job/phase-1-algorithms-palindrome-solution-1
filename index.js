function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
}

/* 
  Add your pseudocode here
  Converts the word to an array, reverses it and joins it back to a string
  Returns true if the word is equal to the reversed word
*/

/*
  Add written explanation of your solution here
  reverse word converts the word to an array, splits it and joins it back to a string
  then if the word and the reverse word are the same, it returns true. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
