import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Removes unnecessary spaces
    },
    fullName: {
      type: String,
      required: true, // Fixed typo here
      trim: true, // Removes unnecessary spaces
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    }
  }
);

const User = mongoose.model("User", userSchema);

export default User;
