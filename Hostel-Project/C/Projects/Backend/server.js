import express from "express";
import cors from "cors";
import complaintRoutes from "./routes/complaintRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route (to check if server is running)
app.get("/", (req, res) => {
  res.send("Server is working fine!");
});

// Routes
app.use("/api/complaints", complaintRoutes);

// Start Server
app.listen(5000, "0.0.0.0", () => console.log("Backend running on port 5000"));
