const express = require("express")
const app = express()

app.set('view engine','ejs')//used to configure **Express.js** to use **EJS (Embedded JavaScript)** as the template engine.

app.get("/",(req,res)=>{
    res.render('home')
})
app.listen(3000,()=>{
    console.log("listing at port 3000")
})