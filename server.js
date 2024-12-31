const express = require("express")
const allData = require("./allData")
const cors = require("cors")
require("dotenv").config()
var port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())

app.get("/images", (req, res) => {
  res.send(allData)
})

app.get("/images/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const resultado = allData.find((image) => image.id === id)
  return res.send(resultado)
})

app.listen(port, () => {
  console.log(`Servidor rodando`)
})
