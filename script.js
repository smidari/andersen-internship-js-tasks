// universal method
const getData = url => fetch(url).then(response => response.json());

console.log('======= 1 ======= ');
// // Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved"
// // через ms миллисекунд и который несёт значение 100.

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve(100), ms);
//   });
// }
// delay(1000).then(value => console.log('Done with ' + value)); // Done with 100

console.log('======= 2 ======= ');
// // если поле поле getUsersData true вывести в консоль данные
//
// function getUsers() {
//   getData('http://www.json-generator.com/api/json/get/cfQCylRjuG').then(({ getUsersData }) => {
//     if (getUsersData) {
//       getData('http://www.json-generator.com/api/json/get/cfVGucaXPC').then(result =>
//         console.log(result)
//       );
//     }
//   });
// }
// getUsers();

console.log('======= 3 ======= ');
// // ф-я должна получать данные по urls, и выводить их последов. и параллел.
//
// const urls = [
//   `http://www.json-generator.com/api/json/get/cevhxOsZnS`,
//   `http://www.json-generator.com/api/json/get/cguaPsRxAi`,
//   `http://www.json-generator.com/api/json/get/cfDZdmxnDm`,
//   `http://www.json-generator.com/api/json/get/cfkrfOjrfS`,
//   `http://www.json-generator.com/api/json/get/ceQMMKpidK`,
// ];
//
// function getAllDataParallel(arrUrls) {
//   Promise.all(arrUrls.map(getData)).then(values => console.log('getAllDataParallel', values));
// }
//
// function getDataSequential(arrUrls) {
//   const result = arrUrls.reduce((acm, url) => {
//     return acm.then(items => getData(url).then(data => [...items, data]));
//   }, Promise.resolve([]));
//   result.then(data => console.log(data));
// }
// getAllDataParallel(urls);
// getDataSequential(urls);

console.log('======= 4 ======= ');
//Написать функцию getResolvedPromise(value), которая возвращает зарезолвленный промис с значением value

function getResolvedPromise(value) {
  Promise.resolve(value)
    .then(i => {
      if (i > 300) {
        throw new Error('Ошибка');
      }
    })
    .catch(i => console.log(i.message))
    .finally(() => console.log('This is Finally'));
}
getResolvedPromise(500);