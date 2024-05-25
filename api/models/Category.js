import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Category", CategorySchema);
