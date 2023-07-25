// how to insert element at a specific position in an array

const arr = [1, 2, 3, 4, 5];
// let position = 3;
// let element = 6;

// insert element by using in-build or default method

// insert element at position 3, deleted element count = 0 , inserted element = 6
// arr.splice(position, 0, element);
// console.log(arr);

// create a custom function to insert element at a specific position in an array

// 1st way : simple for loop || custom or default method
// function insertElement(arr, position, element) {
//   for (let i = arr.length; i > position; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[position] = element;
//   console.log(arr);
// }

// insertElement(arr, 3, 8);

// 2nd way : while loop || custom or default method
// function insertElement2(arr, position, element) {
//   let i = arr.length;
//   while (i > position) {
//     arr[i] = arr[i - 1];
//     i--;
//   }
//   arr[position] = element;
//   console.log(arr);
// }
// insertElement2(arr, 3, 8);

// function insertElement3(arr, position, element) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (i >= position) {
//       arr[i + 1] = arr[i];
//       if (i == position) {
//         arr[position] = element;
//       }
//     }
//   }
//   console.log(arr);
// }
// insertElement3(arr, 3, 8);

// insert array at a specific position in an array
// const arr2=[6,7,8,9,10];
// function insertArray(arr, position, array) {
//     for (let i = arr.length; i > position; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[position] = array;
//     console.log(arr);
// }
// insertArray(arr, 3, arr2);

// polyfill of splice method in-built method

// const InsertedArray = [11, 22,45];
// function insertArray(arr, position, deleteCount, array) {
//   const deletedItem = [],
//     newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i >= position && i < position + deleteCount) {
//       deletedItem.push(arr[i]);
//       arr[i] = "";
//     }
//     if (arr[i] !== "") {
//       newArr.push(arr[i]);
//     }
//     if (i == position) {
//       newArr[position] = array;
//     }
//   }
//   console.log(newArr.flat(arr.length));
//   return { deletedItem , newArr };
// }
// const {deletedItem, newArr }= insertArray(arr, 3, 2, InsertedArray);
// console.log(`deletedItem = ${deletedItem} and newArr = ${newArr}`);

// insert Element at the end of an array

// function insertElementInEnd(arr, ...element) {
//   arr[arr.length] = element;
//   return arr.flatMap((item) => item);
//   arr = [...arr, ...element]; /* by using spread operator */
//   return arr;
// }
// console.log(insertElementInEnd(arr, 4, 5));

// insert Element at the beginning of an array

function insertElementInStart(arr, ...element) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = element;
  return arr.flat(arr.length);

  //   arr = [...element, ...arr]; /* by using spread operator */
  //   return arr;
}
console.log(insertElementInStart(arr, 2, 7, 4));
