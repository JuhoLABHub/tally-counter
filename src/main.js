const express = require('express')
const logger = require('logger')
const app = express()
const port = 3000

app.get('/counter-increase', (req, res) => {
  logger.info(''
  )
})

app.listen(port, () => {
  console.log(`Localhost ${port}`)
})