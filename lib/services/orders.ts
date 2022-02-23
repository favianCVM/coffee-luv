import { Orders } from "../models";

export default class OrdersService {
	static getAllOrders = async () => await Orders.find();
}
