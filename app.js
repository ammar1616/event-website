const express = require("express")
const app = express()
app.use(express.json())
const path = require("path")

app.use(express.urlencoded({ extended: false }))
app.use(
    express.static(path.join(__dirname, "./public"))
)
app.use(require("./routes/user.route"))


let createtable = require("./index")
createtable()


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


app.listen(3333, console.log("server is running"))