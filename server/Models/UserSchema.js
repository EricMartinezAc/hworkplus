import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    id_person: { type: String, required: true, ref: "Persons" },
    id_product: { type: String, required: true, ref: "Products" },
    user: { type: String, min: 20, match: /[a-z]/ },
    psw: { type: String, min: 20, match: /[a-z]/ },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);
