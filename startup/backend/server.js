import express, { Router } from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
dotenv.config();
connectToDB();
import registerRoute from "./Route/Register.route.js";
import loginRoute from "./Route/login.route.js";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Import and use routes
app.use("/", registerRoute);
app.use("/", loginRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
