// how to insert element at a specific position in an array

const arr = [1, 2, 3, 4, 5];
let position= 3;
let element = 6;

// insert element by using in-build or default method 

// insert element at position 3, deleted element count = 0 , inserted element = 6 
// arr.splice(position, 0, element); 
// console.log(arr);

// crete a function to insert element at a specific position in an array

// 1st way
function insertElement(arr, position, element){
    for(let i = arr.length; i > position; i--){
        arr[i] = arr[i-1];
    }
    arr[position] = element;
    // return arr;
}

insertElement(arr, 3, 8); 
console.log(arr);




