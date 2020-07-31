/*const readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  })
  .on('line', (line) => console.log(line.split('').reverse().join(''))) 
*/

process.stdin.on('data', (data) => {
  let chunk = data.toString().split('').reverse().join('')
  process.stdout.write(chunk + '\n')
})
