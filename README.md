# ECMAScript6

El contenido de este repositorio es tener una guía del curso de ECMAScripts 6.

## ¿Que es EGMAScript?

ECMAScript es la especificación donde se mencionan todos los detalles de cómo debe funcionar y comportarse Javascript en un navegador. De esta forma, los diferentes navegadores (Chrome, Firefox, Opera, Edge, Safari…) saben como deben desarrollar los motores de Javascript para que cualquier código o programa funcione exactamente igual, independientemente del navegador que se utilice.

ECMAScript suele venir acompañado de un número que indica la versión o revisión de la que hablamos (algo similar a las versiones de un programa). En cada nueva versión de ECMAScript, se modifican detalles sobre Javascript y/o se añaden nuevas funcionalidades, manteniendo Javascript vivo y con novedades que lo hacen un lenguaje de programación moderno y cada vez mejor preparado para utilizar en el día a día.

## Default Params y Concatenación

La siguiente función muestra como se definía una función donde sus parámetros tienen un valor por defecto.

```
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "EC";
  console.log(name, age, country);
}
```

Con EGMA 6 se puede definir dentro de la función los valores por defecto

```
function newFunction2(name = "oscar", age = 32, country = "Ec") {
  console.log(name, age, country);
}
```

La forma de llamar a dichas funciones es la misma

```
newFunction2();
newFunction2("Javier", 23, "CO");
```

**Resultado**

```
oscar 32 Ec
Javier 23 CO
```

La forma de concatenar strings:

```
let hello = "hello";
let world = "world";
```

Usando el signo **+**

```
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
```

**Resultado**

```
hello world
```

En ECMAScrip 6 se tiene:

```
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);
```

**Resultado**

```
hello world
```

##LET y CONST, Multilínea, Spread Operator y Desestructuración

Se puede hacer un salto de linea con **\n**
let lorem = "Quiero escribir una frase epica \n" + "Es otra frase epica";

//es6
let lorem2 = `Nueva frase epica ahora esta es otra frase epica`;

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

![Scope](https://static.platzi.com/media/user_upload/const-vs-let-vs-var-f3270d36-0e39-4e0d-8ed1-2681991b84b2.jpg)

#Arrow Functions, Promesas y Parámetros en objetos
