const express = require('express')

const app = express();

app.use(express.json());

app.get('/health', (_, res) => {
  return res.json({
    uptime: process.uptime(),
    message: 'Server is up',
  })
})

module.exports = app;