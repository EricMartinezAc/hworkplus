import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    tittle: { type: String, min: 18, required: true },
    body: { type: String, min: 100, required: true },
    status: { type: String, min: 10, default: "Pendiente", required: true },
    Priority: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
