//import Express

const express = require('express')

//Server Erstellen

const app = express ()

//Server abhören 

app.listen(3003, ()=>{
    console.log('server listening at http://localhost:3003')
}

)

// Routing 
// Single
// req:request
// res:response

//static files abhoren
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname})
})