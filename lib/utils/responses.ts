import { Response } from "express";

export default class ResponsesUtil {
	static awnsertError = (
		error: any,
		response: Response,
		alternativeMessage: string
	) => {
		console.error(error)

		return response.json({
			error,
			message: error.message || alternativeMessage,
		});
	};
}