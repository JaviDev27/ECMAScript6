//# la version 9 es lanzada en Junio del 2018

/**
 * # Operador de reposo
 * puede extraer las propiedades de un objeto que no
 * se ha contruido
 */

const obj = {
  name: "Javier",
  age: 28,
  country: "EC",
};

let { name, ...all } = obj;
console.log(name, all);

let { country, ...all2 } = obj;
console.log(all2);

/**
 * aqui sacas lo que enecesitas
 * Javier { age: 28, country: 'EC' }
 * { name: 'Javier', age: 28 }
 */

//#

const obj1 = {
  ...obj,
  country: "CO",
};

console.log(obj1);
/**
 * { name: 'Javier', age: 28, country: 'CO' }
 */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hellow world");
        }, 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("finalizo")); //Este bloque se ejecuta al finalizar la promesa

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
