/*
const readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  })
  .on('line', (line) => console.log(line.split('').reverse().join(''))) 

process.stdin.on('data', (chunk) => {
  let data = String(chunk).replace('\r\n', '').split('').reverse().join('')
  process.stdout.write(data + '\n')
})
*/

const { Transform } = require('stream')

const dataTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(
      chunk.toString().replace('\n', '').split('').reverse().join('') + '\n'
    )
    callback()
  },
})

process.stdin.pipe(dataTransform).pipe(process.stdout)
