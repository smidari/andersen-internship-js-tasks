console.log("===== 1 =====");
function func(str) {
  const arr = str.split(".");
  const obj = {};
  let lastObj = obj;
  for(let i = 0; i < arr.length; i++){
    if(i === arr.length - 1){
      lastObj[arr[i]] = null;
    }else{
      lastObj[arr[i]] = {};
      lastObj = lastObj[arr[i]];
    }
  }
  return obj;
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
// // !!!!!!!!!( исправить не ищет третье совпадение)
// // Анаграммы. Написать функцию anagrams(array), которая принимает массив слов и ищет анаграммы
// const input = [
//   "вертикаль",
//   "кильватер",
//   "апельсин",
//   "спаниель",
//   "австралопитек",
//   "ватерполистка",
//   "кластер",
//   "сталкер",
//   "стрелка",
// ];
//
// function anagrams(array) {
//   const anagrams = [];
//   array.forEach((item) => {
//     let itemArr = item.split("");
//     array.forEach((el) => {
//       if (el !== item && !anagrams.flat().includes(el)) {
//         let elArr = el.split("");
//         let diffArr = diff(itemArr, elArr);
//         if (diffArr.length === 0) {
//           anagrams.push([itemArr.join(""), elArr.join("")]);
//         }
//       }
//     });
//   });
//
//   return anagrams;
// }

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
