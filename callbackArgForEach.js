//test.js

function findWaldo(arr, found) {
  arr.forEach(function(v, i){
    if (arr[i] === "Waldo") {
     found(i);   // execute callback
    };
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
