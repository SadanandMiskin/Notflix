import express, { Request, Response } from 'express'

import { handleLogin } from './functions/handleLogin'
import { handleRegister } from './functions/handleRegister'

const router = express.Router()

//register
router.post("/register" , async(req: Request , res: Response) => {
  const {username ,email,  password} = req.body
  handleRegister(req, res, username , email ,password)
})


//login·
router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  handleLogin(req , res , email , password)
});



export default router