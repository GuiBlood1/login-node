const express = require('express')
const app = express()

app.set('view-engine' , 'ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs', {nome : 'Guilherme'})
})

app.get('/login' ,(req,res)=>{
    res.render('login.ejs')
})

app.get('/registro',(req,res)=>{
    res.render('registro.ejs')
})

app.listen(3000)