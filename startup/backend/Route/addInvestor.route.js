import express from "express";
const Router = express.Router();
import investors from "../controller/addinvestor.controller.js";

Router.route("/addinvestor").post(investors.addInvestorController);

Router.route("/investors").get(investors.getInvestors);
export default Router;
