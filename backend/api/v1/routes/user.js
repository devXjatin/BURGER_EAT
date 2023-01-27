import express from "express";
import passport from "passport";
import { getMyProfile, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//google oauth 2.0 route
router.get("/google-oauth", passport.authenticate("google",{
    scope:["profile"]
}))

//login route 
router.get("/login", passport.authenticate("google"),(
    (req,res, next)=>{
        res.send("Logged In")
    }
))

//profile route
router.get("/me", isAuthenticated, getMyProfile)

//logout route
router.get("/logout",logout)



export default router;