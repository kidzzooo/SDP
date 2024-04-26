const User = require('../models/User');
const Token = require('../models/Token');
const sendEmail = require('../mailer'); 
const crypto = require('crypto');
require('dotenv').config();

const register = async (req, res) => {
  try {
    let user = new User(req.body);
    user = await user.save();
    // const token = await new Token({
    //   userId: user._id,
    //   token: crypto.randomBytes(32).toString("hex"),
    // }).save();
    // const url = `${process.env.BASE_URL}/${user._id}/verify/${token.token}`;
    
    // // Call sendEmail function to send verification email
    // await sendEmail(
    //   user.email,
    //   "Account Verification",
    //   `Please click on the link to verify your account: ${url}`
    // );
    
    res.status(200).send("Account created successfully.");
  } catch (error) {
    res.status(400).send(error);    
  }
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(req.body.username)
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("Logged in Successfully");
  }
  catch (error) {
    res.status(400).send(error);
  }
}

// const verify = async (req, res) => {
//   try {
//     const token = await Token.findOne({
//       userId: req.params.userId,
//       token: req.params.token,
//     });
//     if (!token) {
//       return res.status(404).send("Invalid token");
//     }
//     await User.updateOne({ _id: req.params.userId }, { isVerified: true });
//     await token.remove();
//     res.status(200).send("Account verified successfully");
//   } catch (error) {
//     res.status(400).send(error);
//   }
// }

module.exports = { register, login};
