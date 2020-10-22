// 1 Singleton (практика Замыканий)
function Universe() {
  let instance = null;
  if (Universe.instance) {
    return Universe.instance;
  } else {
    this.size = 100;
    this.getSize = function () {
      return this.size;
    };
    this.setSize = function (size) {
      this.size = size;
    };
    Universe.instance = this;
    return Universe.instance;
  }
}

let a = new Universe();
let b = new Universe();

console.log(a === b); // должны получить true
console.log(a.getSize(), b.getSize()); // 100, 100
a.setSize(200);
console.log(a.getSize(), b.getSize()); // 200, 200
