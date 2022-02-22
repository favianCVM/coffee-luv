import { Router } from "express";
import { get_all_orders } from "../controllers/orders/index";
const router = Router();

router.get("/get-all-orders", get_all_orders);
