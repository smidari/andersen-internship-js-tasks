function Person(name) {
  this.name = name;
}

Person.prototype.setName = function () {
  this.name = name;
};
Person.prototype.getName = function () {
  return this.name;
};

function Man(name, facialHair) {
  Person.call(this, name);
  this.facialHair = facialHair;
  this.getFacialHair = function () {
    return this.facialHair;
  };
  this.getName = function () {
    return "Name: " + this.name;
  };
}

Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;

const person = new Person("somebody");
console.log(person.getName()); // somebody

const man = new Man("Viktor", true);
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair()); // true
