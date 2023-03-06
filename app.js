const express = require('express');
const app = express();

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
    res.send(`// Omitted for brevity `)
  })
  
  app.get('/kittens', (req, res) => {
    res.send(` // Omitted for brevity `)
  })






const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});