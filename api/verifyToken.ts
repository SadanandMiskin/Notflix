import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'

export function verify(req: Request, res: Response, next: NextFunction) {
  const AuthHeader = req.headers.token
  if (!AuthHeader || typeof AuthHeader !== 'string') {
    return res.status(401).json("Not Authenticated");
  }

  if(AuthHeader) {
      const token = AuthHeader.split(" ")[1]
      const secret = process.env.SECRET;
          if (!secret) {
            console.error('JWT secret is not defined');
            return res.status(500).json({ message: 'Server error: missing secret key' });
          }
      jwt.verify(token , secret, (err , user)=> {
        if(err) {
          return res.status(403).json("Forbidden")
        }
          req.user = user;
        next()
      })
  }else{
    return res.status(401).json("Not Authenticated")
  }
}