import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';

const router = express.Router();

router.put("/:id", async (req: Request, res: Response) => {
  // Check if the user is authorized to update the profile
  if (req.user.id === req.params.id || req.user.isAdmin) {

    try {
      // If password is provided, hash it
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 4);
      }

      // Update the user in the database
      const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

      // Respond with the updated user data
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json('Internal Server Error');
    }
  } else {
    return res.status(403).json('Forbidden');
  }
});

export default router;
