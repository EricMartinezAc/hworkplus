import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user: { type: String, min: 20, match: /[a-z]/ },
    psw: { type: String, min: 20, match: /[a-z]/ },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
