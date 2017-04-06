var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//console.log(students) outputs object



console.log(students.sort(function(a,b){
  // var nameA = a.name
  // var nameB = b.name
  // var ageA = a.age
  // var ageB = b.age

    if (a.name[0] === b.name[0]) {      //work the sort backwards, age first, then by name
      return b.age - a.age
    } else if(a.name[0] < b.name[0]) {
      return -1;
    } else {
      return 1;
    }

  }));


// Initial attempt, didn't sort age, but did sort name

//   if (nameA < nameB) {
//     if (ageA > ageB) {
//       return -1
//     }
//     return -1;
//   }
//   if (nameA > nameB) {
//     if (ageA > ageB) {
//       return 1
//     }
//     return 1;
//   }

//   //equal names
//   return 0
// }))