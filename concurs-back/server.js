import express from "express";
import authRoutes from "./routes/auth.js";
import loginRoutes from "./routes/login.js";

const app = express();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", loginRoutes);



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});