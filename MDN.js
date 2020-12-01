
// var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.x;
// },0)

// console.log(sum);

// function myConcat(separator) {
//     var result = "", // initialize list
//         i;
//     // iterate through arguments
//     for (i = 1; i < arguments.length; i++) {
//         result += arguments[i] + separator;
//     }
//     return result;
// }
// console.log(myConcat(", ", "red", "orange", "blue"));

Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (const i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (const i of iterable) {
  console.log(i);
  console.log(g);// logs 3, 5, 7
}

//thay doi thu
//asfgnakjsgnkaga
