import mongoose, { Document, Schema } from "mongoose";
import { User } from "./types/model";


const userSchema: Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  }

}, { timestamps: true })

export default mongoose.model<User>('User', userSchema)