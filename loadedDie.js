function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var index = 0
  return function() {
    /* your code here */
    index = index + 1
    return list[index - 1]
  }

}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 2
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 5





// function makeLoadedDie(){
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   /* your code here */
//   var inner = function() {
//   var index = 0
//     return function() {
//     /* your code here */

//       index = index + 1
//       return list[index - 1]
//     }
//     return list
//   }
// }


// var rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6