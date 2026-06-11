import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();
// console.log(process.env.MONGODB_URI);

//connect to MongoDB
await mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));    

const PORT = process.env.PORT || 4000;

const app = express();


// View Engine
app.set('views', "./views");
app.set("view engine", "pug");


// Middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());


// Routes
app.get('/', (req, res) => {
    res.render("index");
})


app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send("Something went wrong");
})


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));