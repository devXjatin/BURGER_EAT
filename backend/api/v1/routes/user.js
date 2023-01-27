import express from "express";
import passport from "passport";

const router = express.Router();

//google oauth 2.0 route
router.get("/google-oauth", passport.authenticate("google",{
    scope:["profile"]
}))

//login route 
router.get("/login", passport.authenticate("google",{
    scope:["profile"],
    successRedirect:process.env.FRONTEND_URL
}))



export default router;