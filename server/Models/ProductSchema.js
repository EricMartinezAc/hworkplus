import mongoose from "mongoose";

const ProductSchema = await new mongoose.Schema(
  {
    cliente: { type: String, required: true },
    email: { type: String, required: true },
    psw: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Products", ProductSchema);
