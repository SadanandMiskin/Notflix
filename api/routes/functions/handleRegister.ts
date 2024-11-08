import { Request, Response } from "express";

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from "../../models/User";


export const handleRegister = (req: Request , res: Response , username: string, email: string , password: string) => {
  bcrypt.hash(password, 4)
  .then(hashedPassword => {
    return User.create({
      username,
      email,
      password: hashedPassword
    });
  })
  .then(user => res.status(200).json(user))
  .catch(error => {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error", error });
  });

}