/**
 * Express app
 */

const express = require('express')
const app = express()

// Use middleware
app.use('/assets', express.static('assets'))

// Templeating engine with ejs
app.set('view engine', 'ejs')

// Set up routes
app.get('/', (request, response) => {
  // response.sendFile(`${__dirname}/index.html`)
  // response.send('This is the home page')
  response.render('index')
})

app.get('/contact', (request, response) => {
  // response.sendFile(`${__dirname}/contact.html`)
  // response.send('This is the contact page')
  response.render('contact')
})

app.get('/profile/:name', (request, response) => {
  // response.send(`You requested to see profile with id ${request.params.id}`)
  const data = {
    age: 33, 
    job: 'Chef',
    hobbies: ['sleeping', 'hiking', 'drinking']
  }
  // render profile.ejs with dynamic data
  response.render('profile', {
    person: request.params.name,
    data
  })
})

// Listen for app on port 8000
app.listen(8000)