/**
 * STREAMS AND BUFFERS
 * - Buffer is a temporary storage space for small chunbks of data being transfered from one spot to another
 * - Stream of data flowing overtime 
 */

// Writable Stream - Allows nodejs to qwrite data to the stream
// const fs = require('fs')
// const myWriteStream = fs.createWriteStream(`${__dirname}/writtenStream.txt`)

// // Readable streams - Allows nodejs to read data to the stream, 
// // loremIpsum.txt will be read in bits through the stream and passed in chunks to myReadStream
// const myReadStream = fs.createReadStream(`${__dirname}/loremIpsum.txt`, 'utf8')
// myReadStream.on('data', (chunk) => {
//   console.log('new chunk received')
//   myWriteStream.write(chunk)
// })

// Duplex stream - Allows nodejs to reada and write data to and from the stream