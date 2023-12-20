// CommonJS module
// const obj = require('./test')
// console.log('obj: ', obj);

// const {names} = require('./test') - можно використовувати деструктиризацію!
// const { names } = require('./test');
// console.log('names: ', names);

// const currentMonth = require("./date").getCurrentMonth (); - відразу при імпорті викличеться функція 

// const fs = require('fs/promises');
// // const fs = require("fs").promises;

// const readFile = async () => {
//     const text = await fs.readFile('./db/data.txt', 'utf-8');
//     console.log('text: ', text);
//     // const buffer = await fs.readFile('./db/data.txt');
//     // // console.log('buffer: ', buffer);
//     // const text = buffer.toString();
//     // console.log('text: ', text);
// }

// readFile() - читає файл

// const addText = async() => {
//     const text = await fs.appendFile('./db/data.txt', '/nHello world');
//     console.log('text: ', text);
// }

// addText(); - додає iнформацію

// const replaceText = async () => { 
//     const result = await fs.writeFile('./db/data.txt', ['/nHello world']);
//     console.log('result: ', result);
// }

// replaceText() -перезаписує інформацію