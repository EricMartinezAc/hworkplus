import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    id_user: { type: String, required: true, ref: "Users" },
    tittle: { type: String, min: 18, required: true },
    body: { type: String, min: 100, required: true },
    status: { type: Number, max: 5, default: 0, required: true },
    Priority: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Projects", ProjectSchema);
