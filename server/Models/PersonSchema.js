import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema(
  {
    name: { type: String, match: /[a-z]/, required: true },
    lastname: { type: String, match: /[a-z]/, required: true },
    birthDate: { type: Date, required: true },
    tIdent: { type: String, required: true },
    nIdent: { type: Number, required: true },
    country: { type: String, default: "Colombia" },
    city: { type: String, default: "Bogotá D.C." },
    location: String,
    nTel: Number,
    nCell: Number,
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Person", PersonSchema);
