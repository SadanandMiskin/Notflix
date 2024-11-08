import mongoose, { Document } from "mongoose";

// User type
export interface User extends Document{
  username: string
  email: string,
  password: string,
  profilePicture?: String,
  isAdmin?: boolean
}


// movie type
export interface Movie extends Document {
  title : string,
  description: string,
  image: string,
  imageTitle: string,
  imageTumbnail : string,
  trailer: string,
  video: string,
  year: string,
  limit: number,
  genre: string
  isSeries: bool
}


export default interface List extends Document {
  title: string,
  type: string,
  genre: string,
  content: {
    type: Array
  }
}