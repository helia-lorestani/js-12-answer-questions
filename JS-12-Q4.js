//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring
//1)
for (var i = 0; i < 5; i++) {}
console.log(i); // => 5 ❌ (var only works correctly in functions)

for (let j = 0; j < 5; j++) {}
// console.log(j); // is not defined ✅

{
  const k = 6;
  console.log(k);
}
// console.log(k); // is not defined  ✅

//2)

const arrowFunc = (num) => num * num;
console.log(arrowFunc(2));
function func(num) {
  return num * num;
}
console.log(func(2));

//3)

let number = 3;
console.log("value:" + number);

console.log(`value:${number}`); // using template strings

//4)

arr = [1, 2, 3];
const [first, second, third] = arr;
console.log(first, second, third);

obj = {
  firstName: "helia",
  lastName: "lorestani",
  age: 19,
};
const { firstName, lastName, age: AGE } = obj;
console.log(firstName, lastName, AGE);
