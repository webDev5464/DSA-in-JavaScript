# DSA in JavaScript

## 📌 Basic of arrays

### 🔺 Introduction to Arrays

Array ek linear data structure hai jisme elements sequentially stored hote hain.

```js
let numbers = [10, 20, 30, 40, 50];
console.log(numbers); 
// Output: [10, 20, 30, 40, 50]
```

### 🔺 Accessing Array Elements

Array ke elements index se access kiye ja sakte hain.

```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Mango
```

### 🔺 Array Operations

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

### 🔺 Iterating Over Arrays

Array ke elements pe iterate karne ke kai tarike hain.

```js
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

<details>
  <summary>Output:</summary>
  
 ```js
  10
  20
  30
  40
  50
 ```

</details>
