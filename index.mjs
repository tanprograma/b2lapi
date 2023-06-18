import express from "express";
import biltils from "./backend/routes/biltil.mjs";
import * as dotenv from "dotenv";
dotenv.config();
import { dbConnect } from "./backend/db.mjs";

const DB_URI = process.env.DB_URI;
dbConnect(DB_URI);
const app = express();
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  next();
});
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/biltils", biltils);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("actively listening on port " + port);
});
