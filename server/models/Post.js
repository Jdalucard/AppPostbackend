import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    public_id: String,
    secure_url: String,
  },
});

export default mongoose.model("Post", postSchema);
