let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArray = numbers.map(number => {
//   return number * number
// })
// console.log(newArray); // Output: [ 1, 4, 9, 16, 25 ]

const oddNumber = numbers.filter(val => val % 2)
console.log(oddNumber); // Output: [ 1, 3, 5, 7, 9 ]

const evenNumber = numbers.filter(val => val % 2 === 0)
console.log(evenNumber); // Output: [ 2, 4, 6, 8, 10 ]


// console.log(numbers[numbers.length - 1]);

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 19 },
//   { name: "David", age: 15 },
//   { name: "Eve", age: 30 }
// ];

// const adults = users.filter((val) => val.age > 18)

// console.log(adults);

// [
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 19 },
//   { name: 'Eve', age: 30 }
// ]