//## ¿Qué se implementó en ES10?
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

/**
 * La funcion flat va aplanando el arreglo
 * segun el nivel que se envie como parametro
 * flag(__valor de la profundida__)
 * Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
 */
console.log(array.flat());
console.log(array.flat(2));
console.log(array.flat(3));

/**
 * Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
 */
let array1 = [1, 2, 3, 4, 5];

console.log(array1.flatMap((value) => [value, value * 2]));
/**Salida
 * [
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
*/

//String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
let hello2 = "            hello world";
console.log(hello2);
console.log(hello2.trimStart());

/**
 *             hello world
hello world
 */

let hello2 = "hello world       ";
console.log(hello2);
console.log(hello2.trimEnd());

/**
 * hello world       
hello world
 */

//try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.

try {
} catch {
  error; //Ya tienes el valor
}

///Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().

let entries = [
  ["name", "oscar"],
  ["age", "32"],
];

console.log(Object.fromEntries(entries));
/**
 * { name: 'oscar', age: '32' }
 */

//Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
let mySymbol = "My symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);

/**



Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description
 */

//TC39
/**
 * El TC39 de Ecma International es un grupo de desarrolladores, implementadores, académicos y más de JavaScript, que colaboran con la comunidad para mantener y desarrollar la definición de JavaScript.
 */
