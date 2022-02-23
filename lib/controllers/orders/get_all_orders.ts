import { Request, Response } from "express";
import ResponsesUtil from "../../utils/responses";
import OrdersService from "../../services/orders";

export default async function (req: Request, res: Response) {
	try {
		let all_orders = await OrdersService.getAllOrders();

		res.json({ all_orders });
	} catch (error) {
		ResponsesUtil.awnsertError(error, res, "get orders error");
	}
}
