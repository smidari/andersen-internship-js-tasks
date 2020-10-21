// Реализовать функцию throttleTime
function myFunc1() {
  console.log('test')
}
const throttleFunc = throttleTime(myFunc1, 500);

throttleFunc();
throttleFunc();
setTimeout(() => throttleFunc(), 500);
setTimeout(() => throttleFunc(), 600);

function throttleTime(func, time) {
  return function () {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined // function is being called for the first time
      || (this.lastCall - previousCall) > time) { // throttle time has elapsed
      func();
    }
  }
}

// Реализовать функцию debounceTime
function myFunc() {
  console.log('test debounceTime');
}
const debounceFunc = debounceTime(myFunc, 500);
debounceFunc();

function debounceTime(func, time) {
  return function () {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= time)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => func(), time);
  }
}

