import express from "express"
import {user} from "../controllers/userController.js"
const router = express.Router();
router.get("/get",user)
export default router;