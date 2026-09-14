import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service:"gmail",
  
  auth: {
   type:"OAuth2",
   user:process.env.Google_Email,
   clientId:process.env.clientID,
   clientSecret:process.env.clientSecret,
   refreshToken:process.env.RefreshToken
  },
});

export default transporter;