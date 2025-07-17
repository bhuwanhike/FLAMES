import mongoose from "mongoose";

const AddStartupSchema = new mongoose.Schema({
  startupName: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    enum: ["Fintech", "SaaS", "Consumer Tech", "EdTech"],
  },
  idea: {
    type: String,
  },
  fundingNeeded: {
    type: String,
  },
  traction: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  team: {
    type: String,
  },
});

const AddStartup = mongoose.model("Startup", AddStartupSchema);

export default AddStartup;
