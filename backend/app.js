import express from 'express';
import dotenv from 'dotenv'
import {connectPassport} from "./utils/Provider.js"
import session from 'express-session';

const app = express();
export default app

dotenv.config({
    path:"./env/config.env"
})

//middleware
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))

app.use(passport.authenticate("session"))
app.use(passport.initialize());
app.use(passport.session())

connectPassport()

app.get('/', (req, res)=>{
    res.send("<h1>WORKING!!!</>")
})

// Importing routes
import userRoute from "./api/v1/routes/user.js";
import passport from 'passport';

app.use("/api/v1", userRoute);