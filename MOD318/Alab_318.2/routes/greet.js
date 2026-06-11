const express = require('express');
const router = express.Router()

router.get('/:name', (req, res) => {
    const {name} = req.params
    res.render('greet', {title: "Greet", name})
})

module.exports = router