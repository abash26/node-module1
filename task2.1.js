import csv from 'csvtojson';
import fs from 'fs';

const csvFilePath = './csv/nodejs-hw1-ex1.csv';
const txtFilePath = './csv/message1.txt';

csv({
  headers: ['book', 'author', 'amount', 'price'],
  colParser: {
    book: 'string',
    author: 'string',
    amount: 'omit',
    price: 'number',
  },
  checkType: true,
})
  .on('error', (err) => {
    console.log(err);
  })
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    const text = JSON.stringify(jsonObj)
      .replace(/[\[\]]/g, '')
      .replace(/},/g, '}\n');

    fs.writeFile(txtFilePath, text, (err) => {
      if (err) throw err;
    });
  });
