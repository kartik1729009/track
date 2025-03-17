import express, { Application } from "express";
// import dotenv from "dotenv";
import authRoutes from "./routes/auth.route";
import { connectDB } from "./lib/db";

// Load environment variables early
dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 5001; // Ensure a valid number

app.use(express.json());
app.use("/api/auth", authRoutes);

// Connect to MongoDB BEFORE starting the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port: ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("❌ Failed to connect to MongoDB", error);
    process.exit(1); // Exit the process if DB connection fails
  });

export default app;
