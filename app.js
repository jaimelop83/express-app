const express = require('express');
const app = express();

// this will be called when someone opens a web browser
// and goes to mywebsite.com
// localhost:1337 (when we develop)
app.get('/', (req, res) => {
    res.send (`
      <html>
       <head>
        <title>Puppies and Kittens site</title>
       </head>
       <body>
        <h1>Puppies and Kittens Galore</h1>
       </body>
      </html>
    `)
  })
  
  app.get('/puppies', (req, res) => {
    res.send(`Puppies`)
  })
  
  app.get('/kittens', (req, res) => {
    res.send(`Kittens`)
  })





// listening on port 1337
const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});