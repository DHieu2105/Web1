import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import roomRoutes from "./routes/room.route.js";

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/rooms", roomRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});