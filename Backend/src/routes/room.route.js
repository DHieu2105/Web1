import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Room route working" });
});

export default router;