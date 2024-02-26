import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    id_user: { type: String, required: true, ref: "Users" },
    tittle: { type: String, min: 18, required: true },
    body: { type: String, min: 100, required: true },
    status: { type: String, min: 10, default: "Pendiente", required: true },
    Priority: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Projects", ProjectSchema);
