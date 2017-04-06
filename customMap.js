/*Implement your own version of the built-in
array map function.

Yours will take in two arguments. The first
will be an array to map and the second will
be a callback function. The function will
return a new array based on the results of
the callback function.*/


var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callback) {
  output_array = [];
  arr.forEach(function(element) {
    output_array.push(callback(element));
  });
  return output_array;
};


/*var letterCount = words.map(function(x) {
   return x.length
});

console.log(letterCount)*/

console.log(map(words, function(word) {
  return word.length;
}));
