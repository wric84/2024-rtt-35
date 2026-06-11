const express = require("express")
const router = express.Router() 

// app.get("/users", (req, res) => {
//     res.send("This is a get request for users")
// })

router
    .route("/")
    .get((req, res) => {
        res.send("This is a get request for users")
    })
    .post((req, res) => {
        res.send("This is a post request for users")
    })

router.get("/:userID", (req, res) => {
    res.send(`This is the page for user: ${req.params.userID}`)
})

router.get("/:userID/profile", (req, res) => {
    res.send(`This is the profile for user: ${req.params.userID}`)
})

router.get("/:userID/profile/:userPosts", (req, res) => {
    res.send(`This is a specific post: ${req.params.userPosts} from user: ${req.params.userID} profile`)
})

// app.post('/users', (req, res) => {
//     res.send("This is a post request for users")
// })

module.exports = router