const express =require('express')
const index = express()

const port = process.env.PORT || 3000

index.listen(port, ()=>{
    console.log('API up and listen port '+ port)
})