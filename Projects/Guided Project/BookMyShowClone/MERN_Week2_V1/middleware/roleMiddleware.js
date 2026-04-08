//checks the permission for the request and allows it or rejects it
const customError=require("../utils/customError")

function roleMiddleware(...allowedRoles){
    return(req,res,next)=>{
        if(!req.user){
            return next(new customError("User Info not found",401))
        }
        if(!allowedRoles.includes(req.user.role)){
            return next(new customError("Forbidden: You do not have access to this resource",401))
        }
        next()
    }
}
module.exports=roleMiddleware