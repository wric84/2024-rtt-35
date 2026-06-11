const express = require("express")

const usersRoutes = require('./routes/users')
const app = express()
const PORT = 3000

//Middleware Timestamp
app.use((req, res, next) => {
    console.log(`Request received at: ${new Date()}`)
    next();}
)

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get("/express", (req, res) => {
    res.send("This is my express page")
})

app.get("/about", (req, res) => {
    res.send("This is my about page")
})

app.get('/mis?sissippi', (req, res) => {
    res.send("This is the mississippi page")
})

app.get("/goo+gle", (req, res) => {
    res.redirect("http://www.google.com")
})

app.get("/ask*jeeves", (req, res) => {
    res.send("This is the old school version of google before google")
})

app.get("/ya(hoo)?", (req, res) => {
    res.redirect("http://www.yahoo.com")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})