import mongoose, {Schema} from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema(
    {
      name:{
        type:String,
        required:true,
        trim:true
      },
      email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
      },
      phone:{
        type:String,
        trim:true,
        defaul:null,
        sparse:true,
        unique:true,
      },
      password:{
        type:String,
        required:true,
      },
      isEmailVerified:{
        type:Boolean,
        defualt:false,
      },
      isPhoneVerified:{
        type:Boolean,
        default:false,
      },
      isWhatsappVerified:{
        type:Boolean,
        default:false,
      },
      refreshToken:{
        type:String,
        default:null
      },
      emailVerificationToken:{
        type:String,
        deafualt:null
      },
      emailVerificationExpiry:{
        type:Date,
        default:null,
      },
      passwordResetToken:{
        type:String,
        default:null,
      },
      passwordResetExpiry:{
        type:Date,
        defualt:null,
      },



    },
    {timestamp:true}
)

//hash password only when it's new or changes - prevents re-hashing
//an already hashed password on unrelated document saves.

userSchema.pre("save",async function(next){
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password,10)
  next()
})