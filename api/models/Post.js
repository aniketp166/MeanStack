import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  date_gmt: {
    type: Date,
    required: true,
  },
  guid: {
    rendered: {
      type: String,
      required: true,
    },
  },
  modified: {
    type: Date,
    required: true,
  },
  modified_gmt: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  title: {
    rendered: {
      type: String,
      required: true,
    },
  },
  content: {
    rendered: {
      type: String,
      required: true,
    },
  },
  excerpt: {
    rendered: {
      type: String,
      required: true,
    },
  },
  author: {
    type: Number,
    required: true,
  },
  featured_media: {
    type: Number,
    required: true,
  },
  comment_status: {
    type: String,
    required: true,
  },

  template: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: "Category",
  }],
  tags: {
    type: [Number],
    required: true,
  },
});

export default mongoose.model("Post", PostSchema);
