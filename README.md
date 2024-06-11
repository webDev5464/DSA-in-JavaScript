# DSA in JavaScript

- [Basic of arrays](#Basic-of-arrays)
  - [Introduction to Arrays](#Introduction-to-Arrays)
  - [Accessing Array Elements](#Accessing-Array-Elements)
  - [Array Operations](#Array-Operations)
  - [Iterating Over Arrays](#Iterating-Over-Arrays)
- [Basic Operations on Arrays](#Basic-Operations-on-Arrays)
  - [Searching in Arrays](#Searching-in-Arrays)
  - [Sorting Arrays](#Sorting-Arrays)
  - [Filtering Arrays](#Filtering-Arrays)
  - [Mapping Arrays](#Mapping-Arrays)

##  Basic of arrays

### Introduction to Arrays

Array ek linear data structure hai jisme elements sequentially stored hote hain.

```js
let numbers = [10, 20, 30, 40, 50];
console.log(numbers); 
// Output: [10, 20, 30, 40, 50]
```

### Accessing Array Elements

Array ke elements index se access kiye ja sakte hain.

```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Mango
```

### Array Operations

  1. **Adding elements:**
     - Push: End me element add karna
      - Unshift: Start me element add karna
  2. **Removing elements:**
     - Pop: End se element remove karna
     - Shift: Start se element remove karna

```js
  let fruits = ["Apple", "Banana"];
  fruits.push("Mango"); // Add at the end
  console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

  fruits.unshift("Orange"); // Add at the beginning
  console.log(fruits); // Output: ["Orange", "Apple", "Banana", "Mango"]

  fruits.pop(); // Remove from the end
  console.log(fruits); // Output: ["Orange", "Apple", "Banana"]

  fruits.shift(); // Remove from the beginning
  console.log(fruits); // Output: ["Apple", "Banana"]
```

### Iterating Over Arrays

Array ke elements pe iterate karne ke kai tarike hain.

```js
let numbers = [10, 20, 30, 40, 50];

// Using for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Using forEach
numbers.forEach(function(number) {
  console.log(number);
});

// Output:
// 10
// 20
// 30
// 40
// 50

```

<details>
  <summary>Practice Exercise</summary>
  
  1. Ek array banao jo 5 integers store karta ho.
  2. Us array ka pehla aur last element print karo.
  3. Array me naya element add karo (end me).
  4. Array se ek element remove karo (start se).

</details>

[Go to top](#DSA-in-JavaScript)

## Basic Operations on Arrays

### Searching in Arrays

Array me kisi element ko search karne ke kai tarike hain. Common methods:

- **indexOf**: Ye method element ka pehla index return karta hai agar element mil jata hai, warna -1 return karta hai.

- **includes**: Ye method true return karta hai agar element array me present hai, warna false return karta hai.

```js 
let fruits = ["Apple", "Banana", "Mango"];

// Using indexOf
let index = fruits.indexOf("Banana");
console.log(index); // Output: 1

// Using includes
let isPresent = fruits.includes("Mango");
console.log(isPresent); // Output: true
```

### Sorting Arrays

Arrays ko sort karne ke liye JavaScript me `sort` method use hota hai. By default, ye elements ko string ke form me lexicographically sort karta hai.

```js
let fruits = ["Banana", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers); // Output: [1, 10, 25, 40, 5, 100] // Incorrect sorting

// Correct way to sort numbers
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers); // Output: [1, 5, 10, 25, 40, 100]
```

### Filtering Arrays

filter method ek naya array return karta hai jo sirf un elements ko include karta hai jo condition satisfy karte hain.

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const oddNumber = numbers.filter(val => val % 2)
console.log(oddNumber); // Output: [ 1, 3, 5, 7, 9 ]

const evenNumber = numbers.filter(val => val % 2 === 0)
console.log(evenNumber); // Output: [ 2, 4, 6, 8, 10 ]
```

**Filtering Objects in an Array:**

Maan lo humare paas ek array hai jo users ke objects store karta hai. Har object me user ka name aur age store hota hai. Hum sirf un users ko filter karna chahte hain jinki age 18 se zyada hai.

```js
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 15 },
  { name: "Eve", age: 30 }
];

const adults = users.filter((val) => val.age > 18)

console.log(adults);

// [
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 19 },
//   { name: 'Eve', age: 30 }
// ]
```

Is example me humne `filter` method use kiya hai to get a new array `adults` jo sirf un users ko contain karta hai jinki age 18 se zyada hai.

**Explanation:**

1. users array me multiple objects hain, har object ek user ko represent karta hai jisme name aur age properties hain.
2. filter method ko ek callback function diya gaya hai jo har user object ko check karta hai.
3. Agar user.age > 18 condition true hoti hai to wo user new array adults me add ho jata hai.
4. Final result me adults array sirf un users ko contain karta hai jinki age 18 se zyada hai.

### Mapping Arrays

`map` method ek naya array return karta hai jisme har element ko callback function ke through transform kiya jata hai.

```js
let numbers = [1, 2, 3, 4, 5];

const newArray = numbers.map(number => {
  return number * number
})

console.log(newArray); // Output: [ 1, 4, 9, 16, 25 ]
```

<details>
  <summary>Practice Exercise</summary>
  
  1. Ek array banao jisme kuch random numbers ho.
  1. Us array me se kisi number ko search karo using `indexOf` aur `includes`.
  1. Array ko ascending order me sort karo.
  1. Array me se even numbers filter karo.
  1. Array ke har element ko square karo using `map`.

</details>