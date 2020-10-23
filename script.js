function Person(name) {
  const a = { name };
  a.getName = function () {
    return a.name;
  };
  return a;
}

function Man(name, facialHair) {
  const superA = Person(name);
  superA.facialHair = facialHair;
  superA.getName = function () {
    return 'Name:' + Person(name).getName.call(superA);
  };

  superA.getFacialHair = function () {
    return superA.facialHair;
  };

  return superA;
}

const person = Person('somebody');
console.log(person.getName()); // somebody

const man = Man('Viktor', true);
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair()); // true
