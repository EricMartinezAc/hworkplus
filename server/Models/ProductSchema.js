import mongoose from "mongoose";

const ProductSchema = await new mongoose.Schema(
  {
    cliente: String,
    email: String,
    psw: String,
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
