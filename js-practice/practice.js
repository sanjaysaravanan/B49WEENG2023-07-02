console.log('Integrated the Practice JS Files');

console.log('Normal Iteration');
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (var i = 0; i < 10; i++) {
  console.log(arr[i]);
}

console.log('for of Iteration');
for (var val of arr) {
  console.log(val);
}

// iterate index or key
console.log('for in Iteration');
for (var index in arr) {
  console.log(index);
}

// Object Iteration 
// Iterating through each key/value pair of an object
console.log('Object Iteration');
const obj = { name: 'Sanjay', age: 25, role: 'developer', company: 'Software' };
for (var k in obj) {
  console.log(k, obj[k]);
}
