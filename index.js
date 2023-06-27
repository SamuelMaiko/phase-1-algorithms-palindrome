function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord="";
  for (let letter of word){
    reversedWord=letter+reversedWord;
  }
    if(reversedWord===word){
      return true;
    }
    else {
      return false;
    }
}
console.log(isPalindrome("magma"));
/* 
  Add your pseudocode here

  create function called palindrome with parameter word
  declare a let variable with empty string  
  use for of to loop through the string
  add each letter behind  the empty string as you loop
  use if statement to compare variable value and parameter
  return the value
*/

/*
  Add written explanation of your solution here

  we loop through the string using the for of loop because strings behave as arrays of letters 
  so we take each letter and add it behind the empty string stored inside variable it will loop through and 
  create a new string that is a reversed version of the initial string
  compare the two using if statement and return true if they are the same and false otherwise 

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
