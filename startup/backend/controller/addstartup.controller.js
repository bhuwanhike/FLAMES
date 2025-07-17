import User from "../schema/register.schema.js";
import AddStartup from "../schema/addstartup.schema.js";
const addStartupController = async (req, res) => {
  //   try {
  const {
    startupName,
    location,
    industry,
    idea,
    fundingNeeded,
    traction,
    email,
    team,
  } = req.body;

  const userExist = await User.findOne({
    email: { $regex: String(email), $options: "i" },
  });
  console.log("User found:", userExist);

  if (userExist) {
    const startup = await AddStartup.create({
      startupName,
      location,
      industry,
      idea,
      fundingNeeded,
      traction,
      email,
      team,
    });
    res.status(201).json({ message: "Startup added successfully", startup });
  } else {
    res.status(201).json({ message: "User not found", userExist });
  }
  //   } catch (error) {
  //     res.status(500).json({ message: "cannot add user" });
  //   }
};

const getStartups = async (req, res) => {
  try {
    const startups = await AddStartup.find();
    res.status(200).json(startups);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default { addStartupController, getStartups };
