/**
 * SERVING HTML PAGES
 */
// http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/html' })
//   const myReadStream = fs.createReadStream(`../index.html`)

//   // pipe() ends the response
//   myReadStream.pipe(response)
// }).listen(8000, '127.0.0.1')

// console.log('now listening on port 8000...')

/**
 * SERVING JSON FILE
 */
http.createServer((request, response) => {
  const object = {
    name: 'Ayomide',
    age: 24
  }
  response.writeHead(200, { 'Content-Type': 'application/json' })
  
  // end() expects string or stream. Cannot pas object
  response.end(JSON.stringify(object))
}).listen(8000, '127.0.0.1')

console.log('now listening on port 8000...')