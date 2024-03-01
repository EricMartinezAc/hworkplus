import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    id_project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "projects",
      required: true,
    },
    body: {
      type: String,
      required: true,
      min: 100,
    },
    status: { type: String, required: true },
    priority: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Tasks", TaskSchema);
