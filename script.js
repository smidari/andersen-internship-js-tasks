console.log("===== 1 =====");
function func(str) {
  const arr = str.split(".");
  const result = arr.reduceRight((acc, key) => {
    if (key === arr[arr.length - 1]) {
      acc[key] = null;
      return acc;
    }
    return { [key]: acc };
  }, {});
  return result;
}

console.log(func("a.b.c.d"));

console.log("===== 2 =====");
// 2. Реализовать функции объединения, пересечения, разности элементов двух массивов:
// Объединение - union(a, b)
// Пересечение - intersection(a, b)
// Разность - difference(a, b)

const union = (a, b) => [...new Set([...a, ...b])];
const intersection = (a, b) => [...a.filter((i) => b.includes(i))];
const diff = (a, b) => [...new Set([...a.filter((i) => !b.includes(i))])];

console.log(union([4, 5, 7, 2, 1, 5], [1, 2, 3, 7, 9])); // [4, 5, 7, 2, 1, 3, 9];
console.log(intersection([1, 2, 3], [4, 3, 2])); // [2, 3]
console.log(diff([1, 2, 3, 7, 9], [4, 5, 7, 2, 1, 5])); // [3, 9]
console.log(diff([4, 5, 7, 2, 1, 5], [1, 2, 3, 7, 9])); // [4, 5]

console.log("===== 3 =====");
// Анаграммы. Написать функцию anagrams(array), которая принимает массив слов и ищет анаграммы
const input = [
  "вертикаль",
  "кильватер",
  "апельсин",
  "спаниель",
  "австралопитек",
  "ватерполистка",
  "кластер",
  "сталкер",
  "стрелка",
];

function anagrams(arr) {
  let obj = arr.reduce((acc, item) => {
    let itemForArr = item.split("").sort().join("");
    acc.hasOwnProperty(itemForArr)
      ? (acc[itemForArr] = [...acc[itemForArr], item])
      : (acc[itemForArr] = [item]);
    return acc;
  }, {});
  return Object.values(obj);
}
console.log(anagrams(input));

console.log("===== 4 =====");
//  Написать функцию sum, которая работает с многим количеством последовательных вызовов
function sum(a) {
  let currentSum = a;
  function f(b = 0) {
    currentSum += b;
    return f;
  }
  f.toString = function () {
    return currentSum;
  };
  return f;
}

console.log(sum(1)(2)(3)()); // 6
console.log(sum(1)(2)(3)(4) + 1); // 11
console.log(sum(1)(2)(3)(4)(5) + 1); // 16

console.log("===== 6 =====");
// Написать  функцию prop, в которую передается ключ для получение значение по этому ключу.
const tweeps = [
  { name: "Peter", age: 20 },
  { name: "Mary", age: 32 },
];

const prop = (key) => (item) => item[key];

const str = "Mentioned by " + tweeps.map(prop("name")).join(", ");
console.log(str); // 'Mentioned by Peter, Mary'

const agesStr = `They are ${tweeps.map(prop("age")).join(",")}`;
console.log(agesStr); // ‘They are 20, 32’

console.log("===== 7 =====");
// Написать функцию compose, add, mul. add и mul - каррированные функции (только на 2 вызова).
// функция compose принимает неограниченное кол-во функций и применяет эти функции в обратном порядке.

const compose = (...fsn) => (x) => fsn.reduceRight((v, f) => f(v), x);
const mul = (x) => (y) => x * y;
const add = (x) => (y) => x + y;

const composed = compose(mul(2), add(5), add(2));
console.log(composed(3)); // 20
console.log([1, 2, 6].map(composed)); // [16, 18, 26]
