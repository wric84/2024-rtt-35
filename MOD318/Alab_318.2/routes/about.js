const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('about', {name: 'Sanam'})
})

module.exports = router