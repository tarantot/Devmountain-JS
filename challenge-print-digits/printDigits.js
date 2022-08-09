var reverse = (number) => parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number)

var reverse1 = function(num) {
  var reversed_number = 0;
  while (num != 0) {
    reversed_number *= 10;
    reversed_number += num % 10;
    num -= num % 10;
    num /= 10;
  }
  console.log(`${reversed_number}\n`);
  
  for (num of reversed_number.toString()) {
    console.log(parseInt(num))
  }
}