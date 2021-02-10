function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "EC";
  console.log(name, age, country);
}

//es6
function newFunction2(name = "oscar", age = 32, country = "Ec") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Javier", 23, "CO");

let hello = "hello";
let world = "world";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
