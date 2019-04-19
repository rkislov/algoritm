const express = require('express')
const Statistic = require('../models/statistic')
const router = express.Router()


router.post('/statistics',async (req,res)=>{
    const statistic = new Statistic(req.body)
    try {
        await statistic.save()
        res.status(201).send(statistic)
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/statistics', async (req,res)=>{
    try {
        const statistic = await Statistic.find({})
        res.send(statistic)
    } catch (e) {
        res.status(500).send()
    }

})



module.exports=router