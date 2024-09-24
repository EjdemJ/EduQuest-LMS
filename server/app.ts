import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

// body parser
app.use(express.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());

// cors
app.use(cors({ origin: process.env.ORIGIN }));

// testing api
app.get("/test", (req, res) => {
  res.send("API is Working!");
});

export default app;
