const express = require("express")
const cors = require("cors")
const port = 3350
const app = express()
const allData = require("./allData")

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
