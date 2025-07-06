import express from "express";
const Router = express.Router();
import registerController from "../controller/register.controller.js";

Router.route("/register").post(registerController);

export default Router;
