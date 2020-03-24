/** 
 * BASIC ROUTING
*/

const fs = require('fs')
const http = require('http')

http.createServer((request, response) => {
  console.log('Request made to', request.url)
  if (request.url === '/' || request.url === '/home') {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(`../index.html`).pipe(response)
  }
  else if (request.url === '/contact') {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(`../contact.html`).pipe(response)
  }
  else if (request.url === '/api/ayomide') {
    const ayomide = {
      name: 'Ayomide Onalaja', 
      age: 24,
      profession: 'Software Engineer'
    }

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(ayomide))
  }
  else {
    const notFound = {
      message: 'Resource not foundeezzz'
    }

    response.writeHead(404, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(notFound))
  }
}).listen(8000, '127.0.0.1')

console.log('app listening at port 8000')