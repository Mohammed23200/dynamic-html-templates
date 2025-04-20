const express = require("express")
const app = express()
const path = require('path')
const  redditDate=require("./data.json")

app.use(express.static(path.join(__dirname, 'public')))

console.log(redditDate)
app.set('view engine','ejs')//used to configure **Express.js** to use **EJS (Embedded JavaScript)** as the template engine.
app.set('views', path.join(__dirname, '/views'));
app.get("/",(req,res)=>{
    res.render('home')
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params
    const data = redditDate[subreddit]
    if (data){
        res.render('subreddit',{...data })
    }
    else{
        res.render('Notfound',{subreddit})
    }
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
//when you use `{ ...data }`, you're creating a new object that contains **all the properties of `data`**, with their respective keys and values copied into the new object.