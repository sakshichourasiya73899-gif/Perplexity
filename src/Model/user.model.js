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
//learn the concept why next is inside
userSchema.pre("save",async function(next){
   if(!this.isModified) return next();
   this.password = await bcrypt.hash(this.password,10);
})
//comparing the stored password with enterend password for login
userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = async function(){
  return jwt.sign(
    {_id:this._id,
      email:this.email
    },
    process.env.accessToken,
    {
      expiresIn:process.env.accessTokenExpiry || "15m"
    }
  )
};

userSchema.methods.generateAccessToken = function(){
  return jwt.sign({_id:this._id},
    process.env.refreshToken,
    {
      expiresIn:process.env.refreshTokenExpire || "10d"
    }
  )
}

export const User = mongoose.model("User",userSchema)

