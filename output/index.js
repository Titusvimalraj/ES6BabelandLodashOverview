"use strict";

// const { groupBy } = require("lodash");
var arr = [];

var gen_Random = function gen_Random() {
  var randomNum = Math.floor(Math.random() * 10);

  if (arr.length == 0) {
    randomNum == 0 ? arr.includes(1) ? '' : arr.push(1) : arr.includes(randomNum) ? '' : arr.push(randomNum);
    gen_Random();
  } else if (arr.length < 8) {
    arr.includes(randomNum) ? '' : arr.push(randomNum);
    gen_Random();
  } else if (arr.length >= 8) {
    return console.log(arr.slice(0).join(''));
  }
};

gen_Random();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
var array = [1, 2, 3]; // _.reverse(array);
// => [3, 2, 1]

console.log(array.reverse()); // => [3, 2, 1]

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~'); // _.forEach([1, 2], value => console.log(value));
// // => Logs `1` then `2`.
// _.forEach({ 'a': 1, 'b': 2 }, (value, key) => {
//     console.log(`${key} : ${value}`);
// });
// => Logs 'a' then 'b' (iteration order is not guaranteed).

[1, 2, 3, 4, 5].forEach(function (val) {
  return console.log(val);
});
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
var users = [{
  'user': 'barney',
  'age': 36,
  'active': true
}, {
  'user': 'fred',
  'age': 40,
  'active': false
}]; // console.log(_.filter(users, o => !o.active));
// // => objects for ['fred']
// // The `_.matches` iteratee shorthand.
// console.log(_.filter(users, { 'age': 36, 'active': true }));
// // => objects for ['barney']
// // The `_.matchesProperty` iteratee shorthand.
// console.log(_.filter(users, ['active', false]));
// // => objects for ['fred']
// // The `_.property` iteratee shorthand.
// console.log(_.filter(users, 'active'));
// => objects for ['barney']

console.log(users.filter(function (val) {
  return val.age > 35;
}));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~'); // console.log(_.includes([1, 2, 3], 1));
// => true

console.log([1, 2, 3].includes(1)); // => true

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

var square = function square(n) {
  return n * n;
}; // _.map([4, 8], square);
// // => [16, 64]


console.log([4, 8].map(square));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');