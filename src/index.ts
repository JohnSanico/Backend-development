import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import authRoutes from "./routes/authRoutes";
import { connectDB } from "./config/database";

dotenv.config();

const app = express();

const port = 3000;

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port at http://localhost:${port}`);
});

connectDB().catch((err) => {
    console.log(err);
});