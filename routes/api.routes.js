import express from "express";
import userRoutes from "./book.routes.js";

const router = express.Router();

router.use("/book", userRoutes);

export default router;