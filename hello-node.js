const express = require('express')
const app = express()

console.log("hello from node");

app.get('/', function (req, res) {
    res.send('<h2>Hello World from Express</h2>')
  })

  app.listen(3002)