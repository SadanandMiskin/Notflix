import mongoose, { Schema } from "mongoose";
import { Movie } from "./types/model";
import { title } from "process";

const movieSchema: Schema = new mongoose.Schema({

  title: { type: String },
  image: { type: String },
  imageTitle: { type: String },
  imageTumbnail: { type: String },
  trailer: { type: String },
  video: { type: String },
  year: { type: String },
  limit: { type: Number },
  genre: { type: String },
  isSeries: { type: Boolean }

})

export default mongoose.model<Movie>('Movie', movieSchema)