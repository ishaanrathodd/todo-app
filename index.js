const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

app.get("/todos", (req, res) => {
    res.send("Hello World!")
})  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post("/todo", (req, res) => {
    res.send("Hello World!")
})

app.put("/completed", (req, res) => {
    res.send("Hello World!")
})