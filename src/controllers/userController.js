import { ApiError } from "../utils/ApiError.js"



export const user=(req,res,next)=>{
   if(usernotfound){
      next(new ApiError("user not found...!",404))
   }

}