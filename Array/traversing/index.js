// what is traversing in array
// traversing is a method to access an each element of an array

const arr = [1, 2, 3, 4, 5];

// method of traversing = 1 :- simple for loop || custom or default method 

// function arrayTraversing(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`arr[${i}] = ${arr[i]}`);
//   }
// }
// arrayTraversing(arr);

// method of traversing = 2 :- for of loop || in-built method

// function arrayTraversing2(arr) {
//   for (let element of arr) {
//     console.log(`element = ${element}`);
//   }
// }
// arrayTraversing2(arr);

// disadvantage of traversing in for of loop is it does not allow to access index of each element

// method of traversing = 3 :- for in loop || in-built method
// function arrayTraversing3(arr) {
//   for (let element in arr) {
//     console.log(`element = ${element}`);
//   }
// }
// arrayTraversing3(arr);

// disadvantage of traversing in for in loop is it does not allow to access index of each element

// method of traversing = 4 :- forEach loop || in-built method
// function arrayTraversing4(arr) {
//   arr.forEach((element, index) => {
//     console.log(`element = ${element} at index = ${index}`);
//   });
// }

// arrayTraversing4(arr);

// method of traversing = 5 :- map loop || in-built method
// function arrayTraversing5(arr) {
//   arr.map((element, index) => {
//     console.log(`element = ${element} at index = ${index}`);
//   });
// }

// arrayTraversing5(arr);

// method of traversing = 6 :- filter loop || in-built method
// function arrayTraversing6(arr) {
//   arr.filter((element, index) => {
//     console.log(`element = ${element} at index = ${index}`);
//   });
// }

// arrayTraversing6(arr);

// method of traversing = 7 :- reduce loop || in-built method
// function arrayTraversing7(arr) {
//   arr.reduce((acc, element, index) => {
//     console.log(`element = ${element} at index = ${index}`);
//     return acc + element;
//   }, 0);
// }

// arrayTraversing7(arr);

// method of traversing = 8 :- while loop || custom or default method
//  function arrayTraversing8(arr) {
//    let i = 0;
//    while (i < arr.length) {
//      console.log(`arr[${i}] = ${arr[i]}`);
//      i++;
//    }
//  }
//  arrayTraversing8(arr);

//  method of traversing = 9 :- do while loop || custom or default method

// function arrayTraversing9(arr) {
//   let i = 0;
//   do {
//     console.log(`arr[${i}] = ${arr[i]}`);
//     i++;
//   } while (i < arr.length);
// }
// arrayTraversing9(arr);

