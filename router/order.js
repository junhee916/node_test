const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        massege : "get order"
    })
})

router.post('/', (req, res) => {
    res.json({
        message : "resgister order"
    })
})

router.patch('/', (req, res) => {
    res.json({
        message: "updated order"
    })
})

router.delete('/', (req, res) => {
    res.json({
        message: "deleted order"
    })
})

module.exports = router;