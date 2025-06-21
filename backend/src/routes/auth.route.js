import express from "express";
import { signup,login,logout ,updateProfile,checkAuth} from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const Router = express.Router();

Router.post("/signup", signup);

Router.post("/login", login);

Router.post("/logout", logout);
Router.get("/check",protectRoute,checkAuth);
Router.put("/update-profile",protectRoute,updateProfile);
export default Router;
