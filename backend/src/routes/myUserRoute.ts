import express from "express";
import MyUserController from "../controller/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";


const router = express.Router();

// /api/my/user

router.get("/", jwtCheck, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put(
    "/",
    jwtCheck,
    jwtParse,
    MyUserController.updateCurrentUser
  );

export default router;