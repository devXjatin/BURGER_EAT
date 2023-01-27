import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/google-oauth", passport.authenticate("google",{
    scope:["profile"]
}))

export default router;