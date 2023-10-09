function writeCards(names, occasion) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  module.exports = {
    writeCards,
    countDown,
  };
  