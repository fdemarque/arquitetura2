import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/userController":
import { UserData } from "../data/userData";

export const userRouter = express.Router();

const userController = new UserController(new UserBusiness(new UserData()));

userRouter.post("/signup", userController.signup);
// userRouter.post("/login", userController.login);