import mongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: false,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngkey.com%2Fdetail%2Fu2w7r5r5a9q8y3i1_best-classified-apps-default-user-profile%2F&psig=AOvVaw3uM9hMaX6oMm8TSQc85X-R&ust=1689928849055000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCIjqrdjxnIADFQAAAAAdAAAAABAZ",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    roles: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: "Role",
    },
  }, 
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
