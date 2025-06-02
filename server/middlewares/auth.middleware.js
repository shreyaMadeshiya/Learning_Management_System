import jwt from 'jsonwebtoken';
import AppError from '../utils/error.util.js';


const isLoggedIn=async(req,res,next)=>{
    const {token}= req.cookies;
    if(!token){
        return next (new AppError ('Unauthenticated, please login again ',401)  ) 
    }

    const userDetails = await jwt.verify(token,process.loadEnvFile.JWT_SECRET);
    req.user=userDetails;
    next();

}

const authorizedRoles = (...roles)=>(req,res,next)=>{
   const currentUserRoles = req.user.role;
     if(!roles.includes(currentUserRole)){
        return next(
            new AppError('You do not have permission to access this route',403)
        )
     }

     next();
}


export{
    isLoggedIn,
    authorizedRoles
}