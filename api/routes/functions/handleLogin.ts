import { Request, Response } from "express";


import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from "../../models/User";


export const handleLogin = (req: Request , res: Response , email: string, password:string) => {

  User.findOne({ email })
    .then((user: any) => {
      if (!user) {
        return res.status(401).json('Wrong username or password');
      }

      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            return res.status(401).json('Wrong username or password');
          }

          // Ensure the secret is not undefined
          const secret = process.env.SECRET;
          if (!secret) {
            console.error('JWT secret is not defined');
            return res.status(500).json({ message: 'Server error: missing secret key' });
          }

          const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            secret ,{
              expiresIn: "2d"
            }
          );

          const { password, ...info } = user._doc;

          res.status(200).json({ message: 'Login successful', info, accessToken });
        })
        .catch((error) => {
          console.error("Error comparing password:", error);
          res.status(500).json({ message: "Server error" });
        });
    })
    .catch((error) => {
      console.error("Error finding user:", error);
      res.status(500).json({ message: "Server error" });
    });
}