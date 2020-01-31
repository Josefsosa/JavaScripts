# JavaScript Notes
Big O notation 

Big-O Is a performance representation of our crafted JavaScript code.

### It's important to have precise vocabulary to talk about how our code performs
* It's important to have a precise vocabulary to talk about how our code performs
* Useful for discussing trade-offs between different approaches
* When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
* Less important: it comes up in interviews!

### Useful for discussing 

* Motivate the need for something like Big O Notation
* Describe what Big O Notation is
* Simplify Big O Expressions
* Define "time complexity" and "space complexity"
* Evaluate the time complexity and space complexity of different algorithms using Big O Notation
* Describe what a logarithm is

### Example 1:
"Write a function that accepts a string input and returns a reversed copy"

How can we till which is better?

```javascript
// this one
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
// or this one
function reverse(s) {
  return s.split('').reverse().join('');
}
```

### Example 2:
Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo(n) {
  return n * (n + 1) / 2;
}

```
### Lets see how Big O can help?
Big O Notation is a way to formalize fuzzy counting of operation instead of using a timer which differas on each computer.

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

We want to see the trends.
Big O Definition

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

* f(n) could be linear (f(n) = n)
* f(n) could be quadratic (f(n) = n )
* f(n) could be constant (f(n) = 1)
* f(n) could be something entirely different!

#### Example:
Always 3 operations O(1)
```javascript
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```
Number of operation is (eventually) bounded by a multiple of n (say, 10n)
```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```


| Big-O         | Code                              | Operations  |
| ------------- |---------------------------------| -----------------|
|               | function countUpAndDown(n) {      | 
|               | console.log("Going up!");         | Number of operations is 
|  O(n)         | for (let i = 0; i < n; i++) {     | (eventually) bounded by a 
|               |  console.log(i);                  | a multiple of n (say, 10n)
|               |  }                                |           
|               | console.log("At the top!\nGoing down...");|
|  O(n)         |  for (let j = n - 1; j >= 0; j--) {       | 
|               |  console.log(j);                          | 
|               |  }                                        |    
|               | console.log("Back down. Bye!");           |
|               |  }                                        |    

 

### Big O Shorthands
Arithmetic operations are constant
Variable assignment is constant
Accessing elements in an array (by index) or object (by key) is constant
In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop
