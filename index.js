const express = require("express")
const app = express()
const port = process.env.PORT || 4001

app.get("/add", function(req, res) {
  const num1 = parseInt(req.query.num1)
  const num2 = parseInt(req.query.num2)
  const results = num1 + num2
  return res.json(results)
})

app.listen(port, () => 
  console.log(`App listening on port ${port}`))