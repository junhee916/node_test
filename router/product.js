const express = require("express")
const router = express.Router()

// crud (create - read - update - delete)
router.get('/', (req, res) => {
    res.json({
        message: "product get"
    })
})

router.post('/', (req, res) => {
    res.json({
        message: "resister product"
    })
})

router.patch('/', (req, res) => {
    res.json({
        message : "updated product"
    })
})

router.delete('/', (req, res) => {
    res.json({
        message: "deleted product"
    })
})






module.exports = router