// Code your solutions in this file
// Function to generate thank you messages for names
function writeCards(names, occasion) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }
  
  // Function to count down from a given number to zero and log each number
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Export the functions for testing
  module.exports = {
    writeCards,
    countDown,
  };
  