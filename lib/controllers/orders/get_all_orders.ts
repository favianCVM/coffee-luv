import { Request, response, Response } from "express";
import ResponsesUtil from "../../utils/responses";

export default function (req: Request, res: Response) {
	try {
	} catch (error) {
		console.error(error);
		ResponsesUtil.awnsertError(error, res, "get orders error");
	}
}
