// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// Write your code below this line.



const luckyNumbers = (num) => Array.from({length: num}, () => Math.floor(10 * Math.random()) + 1).join(', '); // not unique


function luckyNumbers1 (number) {
    var final = [];
    while (final.length <= number) {
      var num = Math.floor(10 * Math.random()) + 1
      if (!final.includes(num)) {
        final.push(num);
      }
    }
    return final.join(', ')
  }