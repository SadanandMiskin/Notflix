import mongoose, { Schema } from "mongoose";
import List from "./types/model";

const ListSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: String,
  genre: String,
  content: {
    type: Array
  }
}, {timestamps: true})

export const listModel = mongoose.model<List>('listModel' , ListSchema)