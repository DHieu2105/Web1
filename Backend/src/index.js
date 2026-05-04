import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import roomRoutes from "./routes/room.route.js";
import userRoutes from "./routes/user.route.js";
import imageRoutes from "./routes/image.route.js";

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use("/rooms", roomRoutes);
app.use("/users", userRoutes);
app.use("/images", imageRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

