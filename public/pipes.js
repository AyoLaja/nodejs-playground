/**
 * PIPES
 * - More elegant way of handling streams of data flow
 * - Do not manually have to read from a stream and write to a stream
 */
const fs = require('fs')
const http = require('http')
// const myWriteStream = fs.createWriteStream(`${__dirname}/writtenStream.txt`)

// // Readable streams - Allows nodejs to read data to the stream, 
// // loremIpsum.txt will be read in bits through the stream and passed in chunks to myReadStream
// const myReadStream = fs.createReadStream(`${__dirname}/loremIpsum.txt`, 'utf8')
// // Listening to data from the read stream and piping to the write stream
// myReadStream.pipe(myWriteStream)

// response opject is a writable stream so we can write to it
// http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' })
//   const myReadStream = fs.createReadStream(`${__dirname}/writtenStream.txt`, 'utf8')

//   // pipe() ends the response
//   myReadStream.pipe(response)
// }).listen(8000, '127.0.0.1')

// console.log('now listening on port 8000...')