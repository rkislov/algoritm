const express =require('express')
require('./db/mongoose')
const statisticRouter = require('./routes/statistic')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(statisticRouter)


app.listen(port, ()=>{
    console.log('API up and listen port '+ port)
})