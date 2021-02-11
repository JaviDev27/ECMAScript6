//## ¿Qué se implementó en ES8?
//devuelve la clave y los velores de una matriz

const data = {
  frontend: "oscar",
  backend: "ISabel",
  desing: "Ana",
};

const entries = Object.entries(data);
console.log(entries);

/*
[
    [ 'frontend', 'oscar' ],
    [ 'backend', 'ISabel' ],
    [ 'desing', 'Ana' ]
]

*/

//Si queremos saber cuantos elementos tiene un objeto
console.log(entries.length);

//para ontener solo los valores de un objeto
const data = {
  frontend: "oscar",
  backend: "ISabel",
  desing: "Ana",
};

const values = Object.values(data);
console.log(values);

//padStart añade un string al inicio hasta completar el 8 digito
const string = "hello";
console.log(string.padStart(8, "hi"));
console.log(string.padEnd(12, "hi"));
console.log("foot".padEnd(12, "---"));
/**
 * hihhello
hellohihihih
foot--------
 */

/**
 * TRAILING COMMA //Trailing comma, se aplica al ultimo elemento, para evitar errores si a futuro quiero agregar mas elemen
 */

//# Async Await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("helloWorld");
      }, 3000);
    } else {
      reject(new Error("Test Error"));
    }
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

//como se debe ejecutar corectamente se usa el try catch

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
