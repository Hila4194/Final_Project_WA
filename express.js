const express = require('express')
const app = express()
const port = 3700
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/Hila4194',(req,res)=>{
    res.send('This is the final project')
})
app.listen(port,()=>{
    console.log('connecting')
})

function Into(){
    window.location.href="http://localhost:3700/Hila4194"
}