import express from "express";
const Router = express.Router();
import startup from "../controller/addstartup.controller.js";

Router.route("/addstartup").post(startup.addStartupController);

Router.route("/startups").get(startup.getStartups);
export default Router;
