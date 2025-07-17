import mongoose from "mongoose";

const AddInvestorSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    enum: ["Fintech", "SaaS", "Consumer Tech", "EdTech"],
  },
  stage: {
    type: String,
    enum: ["Pre-Seed", "Seed", "Series A"],
    required: true,
  },
  risk: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
  portfolioSize: {
    type: String,
    required: true,
  },
});

const AddInvestor = mongoose.model("Investor", AddInvestorSchema);

export default AddInvestor;
