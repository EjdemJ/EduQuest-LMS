import express from "express";
import { NextFunction, Request, Response } from "express";
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

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not Found!`);
  res.status(400);
  next(err);
});

export default app;
