import { Biltil } from "../models/biltil.mjs";

import express from "express";
const router = express.Router();
router.get("/", async (req, res) => {
  const biltils = await Biltil.find();
  res.send(biltils);
});
router.post("/create", async (req, res) => {
  const post = await Biltil.create(req.body);
  console.log({ post });
  await post.save();
  res.send(post);
});
export default router;
