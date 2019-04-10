const express = require('express')
const app = express()
require('dotenv').config()
const {SERVER_PORT} = process.env
const PORT = SERVER_PORT || 3005

app.listen(PORT, () => console.log(`listening on port ${PORT}`))