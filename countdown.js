var countdownGenerator = function (x) {
  /* your code here */
  var index = x
    return function() {
    /* your code here */
    index = index - 1
    return index + 1
  }
}


var countdown = countdownGenerator(3);

console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
