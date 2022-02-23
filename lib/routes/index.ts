import { Router } from "express";
import orderRoutes from "./orders";

const router = Router();

router.use("/orders", orderRoutes);
router.get("/", (req, res) => {
  res.status(200).send({
    message: "HELLO WORLD"
  })
});

export default router;
