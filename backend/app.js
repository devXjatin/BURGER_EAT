import express from 'express';
import dotenv from 'dotenv'
import {connectPassport} from "./utils/Provider.js"

const app = express();
export default app

dotenv.config({
    path:"./env/config.env"
})

//middleware
connectPassport()


app.get('/', (req, res)=>{
    res.send("<h1>WORKING!!!</>")
})

// Importing routes
import userRoute from "./api/v1/routes/user.js";

app.use("/api/v1", userRoute);