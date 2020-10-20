// 1 Singleton (практика Замыканий)
let singleton = {
  size: 100,
  getSize() {
    return this.size;
  },

  setSize(size) {
    this.size = size;
  },
};
function Universe() {
  return singleton;
}

let a = new Universe();

let b = new Universe();

console.log(a === b); // должны получить true

console.log(a.getSize(), b.getSize()); // 100, 100
a.setSize(200);
console.log(a.getSize(), b.getSize()); // 200, 200