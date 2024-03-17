import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import DefaultData from "./server/default.js";
import * as dotenv from "dotenv";
dotenv.config();

// import routers 
import router from "./server/routes/route.js";

const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
    res.send("hi hello")
});

app.use('/',router)




// --------------- To listent the port and connect the mongoDB -------------------

const mongoURI = process.env.MONGO_URL;
try {
    await mongoose.connect(mongoURI);
    app.listen(port, () => {
        console.log(`Server running on PORT ${port}....`);
    });
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
}

DefaultData();