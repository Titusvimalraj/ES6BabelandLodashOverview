let arr = [];

let gen_Random = () => {
    if (arr.length == 0) {
        let randomNum = Math.floor(Math.random() * 10);
        randomNum == 0 ? arr.push(1) : arr.push(randomNum);
        gen_Random();
    } else if (arr.length < 8) {
        arr.push(Math.floor(Math.random() * 10));
        gen_Random();
    } else {
        return console.log(arr.slice(0).join(''));
    }
}

gen_Random();

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');


let array = [1, 2, 3];

_.reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
_.forEach([1, 2], value => console.log(value));
// => Logs `1` then `2`.

_.forEach({ 'a': 1, 'b': 2 }, (value, key) => {
    console.log(`${key} : ${value}`);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];

console.log(_.filter(users, o => !o.active));
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
console.log(_.filter(users, { 'age': 36, 'active': true }));
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
console.log(_.filter(users, ['active', false]));
// => objects for ['fred']

// The `_.property` iteratee shorthand.
console.log(_.filter(users, 'active'));
// => objects for ['barney']

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');


console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
console.log(_.groupBy(['one', 'two', 'three'], 'length'));
// => { '3': ['one', 'two'], '5': ['three'] }

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

console.log(_.includes([1, 2, 3], 1));
// => true
 
console.log(_.includes([1, 2, 3], 1, 2));
// => false
 
console.log(_.includes({ 'a': 1, 'b': 2 }, 1));
// => true
 
console.log(_.includes('abcd', 'bc'));
// => true

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

let square = (n) => {
    return n * n;
  }
   
  _.map([4, 8], square);
  // => [16, 64]
   
  _.map({ 'a': 4, 'b': 8 }, square);
  // => [16, 64] (iteration order is not guaranteed)
   
  // The `_.property` iteratee shorthand.
  _.map(users, 'user');
  // => ['barney', 'fred']

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');