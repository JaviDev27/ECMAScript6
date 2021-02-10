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

//ec6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Quiero escribir una frase epica \n" + "Es otra frase epica";

//es6
let lorem2 = `Nueva frase epica 
ahora esta es otra frase epica`;

console.log(lorem);
console.log(lorem2);

//Desestructuracion de elementos

let person = {
  name: "Oscar",
  age: 32,
  country: "EC",
};

console.log(person.name);
console.log(person.age);
console.log(person.country);

let { name, age, country } = person;

console.log(name, age, country);

//Puedes unir diferentes elemtos de forma amigable es6

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];

let education = ["David", ...team1, ...team2];
console.log(education);

//Let es para guardar elementos en memoria
//con let solo esta disponible en el scope

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

//const

const a = "b";
//No se puede asignar el valor
a = "a";

////Arrow Functions, Promesas y Parámetros en objetos/////////////

let name = "oscar";
let age = 32;

obj = {
  name: name,
  age: age,
};

//ES6
//Aqui toma de forma directa los valores de name y age
obj2 = { name, age };
console.log(obj2);

//Las arrow funtion solventan un problema una sintaxis mas reducida y
//un this no vinculable

const names = [
  { name: "Oscar", age: 23 },
  { name: "Javier", age: 28 },
];

//Las arrow funtion son funciones anonimas se usa la asignacion __=>__
let listOfName = names.map((item) => console.log(item.name));

const listOfName2 = (name,age,country) =>{
    ...
}

const listOfName3 = name => {
    ...
}

const square = num => num*num;

//Las promesas es para trabajar el asincronismo, js no es asincronico trabaja elemento
// a elemento.
//Resuelve el callback hell que no es escalable

const helloPromise = () =>{
    return new Promise((resolve,reject) =>{
        if(false){
            resolve('hey!')
        }else{
            reject('ups!')
        }
    })
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error))

