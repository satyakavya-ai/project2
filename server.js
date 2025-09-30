require ("dotenv").config()
var express = require("express")
var app=express()
var cors = require("cors")
var connectToDatabase = require("./database/db")

var bookRoute = require("./routes/book-routes")
// var productRoute = require("./routes/product-routes")
connectToDatabase()
var app = express()
app.use(express.json())
app.use(cors())

app.use("/api/books",bookRoute)
// app.use("/api/products",productRoute)

var PORT = process.env.PORT||2002
app.listen(PORT,()=>{
    console.log("The server is running")
})