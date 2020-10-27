// Реализовать функцию throttleTime
function myFunc1() {
  console.log("test");
}
const throttleFunc = throttleTime(myFunc1, 500);
throttleFunc();
setTimeout(() => throttleFunc(), 500);
setTimeout(() => throttleFunc(), 600);

function throttleTime(func, ms) {
  let isThrottled = false;
  return function () {
    if (isThrottled) {
      return;
    }
    func();
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;
    }, ms);
  };
}

// Реализовать функцию debounceTime
function myFunc() {
  console.log("test debounceTime");
}
const debounceFunc = debounceTime(myFunc, 5000);
debounceFunc();

function debounceTime(func, time) {
  let timerId;
  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => func(), time);
  };
}
