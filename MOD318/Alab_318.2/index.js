const express = require('express');
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

const aboutRoute = require('./routes/about')
const greetRoute = require('./routes/greet')
const imageRoute = require('./routes/image')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

//setting the view engine as ejs
app.set('view engine', 'ejs')

app.use(express.static('images'))

app.use('/about', aboutRoute)
app.use('/greet', greetRoute)
app.use('/image', imageRoute)

app.get('/', (req, res) =>{
    res.render('index', {title: "Home"})
})

app.post('/submit-form', (req, res)=> {
    console.log(req.body);
    res.send("Form submitted successfully")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

