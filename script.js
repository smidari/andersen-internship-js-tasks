//   Реализовать apply с помощью call (название - myApply).
//   Реализовать call с помощью apply (название - myCall).
//   Реализовать bind с помощью call (название - myBindByCall).

// Function.prototype.myApply = function (obj, arr) {
//   return this.call(obj, ...arr);
// };
//
// Function.prototype.myCall = function (obj, ...arg) {
//   return this.apply(obj, arg);
// };
//
// Function.prototype.myBindByCall = function (obj, ...arg) {
//   const context = this;
//   return function () {
//     return context.call(obj, ...arg)
//   }
// };
//
// const obj1 = {
//   a: 20,
//   foo: function (...numbers) {
//     return this.a + numbers.reduce((prev, curr) => prev + curr);
//   },
// };
//
// const obj2 = {
//   a: 30,
// };

// console.log(obj1.foo.myApply(obj2, [5, 5])); // 40
// console.log(obj1.foo.myApply(obj2, [5, 5, 10])); // 50
// console.log(obj1.foo.myCall(obj2, 5, 5, 20)); // 60
// console.log(obj1.foo.myCall(obj2, 5, 5, 10, 20)); // 70
//
// const f1 = obj1.foo.myBindByCall(obj2, 5, 5);
// console.log(f1()); // 40
// const f2 = obj1.foo.myBindByCall(obj2, 5, 5, 10);
// console.log(f2()); // 50

console.log("====== 2 ======");
// 2. Написать полифил на Object.create.

function objectCreate(proto, propertiesObject) {
  let newObj = {};
  Object.defineProperties(newObj, propertiesObject);
  newObj.__proto__ = proto;
  return newObj;
}

const obj = {
  a: 1,
};

const obj2 = objectCreate(obj, {
  p: { value: 20 },
  k: { value: 30 },
});

console.log(obj2); // { p: 20, k: 30, __proto__: { a: 1 } }

console.log("====== 3 ======");
// Написать свою реализацию new в виде функции myNew.
function myNew(Constructor, ...props) {
  const obj = Object.create(Constructor.prototype);
  Constructor.apply(obj, props);
  return obj;
}
function F() {
  this.a = 10;
}

F.prototype.foo = function () {
  return this.a;
};

const a = myNew(F);
console.log(a); // { a: 10, __proto__: { foo, constructor } }
console.log(a.foo()); // 10
