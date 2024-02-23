import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    projecID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
