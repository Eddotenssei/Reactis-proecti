import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import loginRoutes from "./routes/login.js";
import provisionRoutes from "./routes/provision.js";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", authRoutes);
app.use("/", loginRoutes);
app.use("/", provisionRoutes);



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});