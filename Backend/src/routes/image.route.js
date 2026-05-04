import express from "express";
import { getImages, getImageById } from "../controllers/image.controller.js";

const router = express.Router();

router.get("/", getImages);
router.get("/:id", getImageById);

export default router;
