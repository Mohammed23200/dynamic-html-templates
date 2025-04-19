const express = require("express")
const app = express()
const path = require('path')


app.set('view engine','ejs')//used to configure **Express.js** to use **EJS (Embedded JavaScript)** as the template engine.
app.set('views', path.join(__dirname, '/views'));
app.get("/",(req,res)=>{
    res.render('home')
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params
    res.render('subreddit',{subreddit })
})

app.get("/cats",(req,res)=>{
    const cats=[//this like data base of cats
        "blue","rocket",'monty','steephanie','lucifer'
    ]
    res.render('cats',{cats})
})
app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random() *10)+1
    res.render('random',{rand:num})
})
app.listen(3000,()=>{
    console.log("listing at port 3000")
})