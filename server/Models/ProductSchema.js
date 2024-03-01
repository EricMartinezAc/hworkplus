import mongoose from "mongoose";

const ProductSchema = await new mongoose.Schema(
  {
    cliente: { type: String, required: true },
    email: { type: String, required: true },
    psw: { type: String, required: true },
    status: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Products", ProductSchema);
