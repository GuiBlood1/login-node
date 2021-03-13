const express = require('express')
const server = express()

server.set('view-engine','ejs')
server.get('/',(req,res)=>{
    res.render('index.ejs')
})

server.get('/registro',(req,res)=>{
    res.render('registro.ejs')
})

server.get('/login',(req,res)=>{
    res.render('login.ejs')
})

server.listen(3000)