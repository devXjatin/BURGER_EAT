
//get my profile business logic
export const getMyProfile = (req, res, next)=>{
    res.status(200).json({
        success:true,
        user:req.user
    })
}

//logout logic
export const logout = (req, res, next)=>{
    req.session.destroy((err)=>{
        if(err){
            return next(err)
        }

        res.clearCookie("connect.sid")
        res.status(200).json({
            message:"Logged Out",
            success: true
        })
    })
}