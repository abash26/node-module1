import csv from 'csvtojson';
import fs from 'fs';

const readStream = fs.createReadStream('./csv/nodejs-hw1-ex1.csv');
const writeStream = fs.createWriteStream('./csv/message.txt');

const converter = csv({
  headers: ['book', 'author', 'amount', 'price'],
  colParser: {
    book: 'string',
    author: 'string',
    amount: 'omit',
    price: 'number',
  },
  checkType: true,
}).on('error', (err) => {
  console.log(err);
});

readStream.on('error', (err) => console.log(err));
writeStream.on('error', (err) => console.log(err));

readStream.pipe(converter).pipe(writeStream);
