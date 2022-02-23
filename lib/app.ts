import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import formidable from "express-formidable";
import jwt from "express-jwt";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config();

const secretHash: string = process.env.SECRET_HASH || "";

class App {
	public app: express.Application = express();
	// public mongoUrl: string = 'mongodb://localhost/CRMdb';
	public mongoUrl: string = process.env.MONGO_URI || "";

	constructor() {
		this.config();
		console.info("APP INITIALIZATED :::");

		//execute mongo setup
		this.mongoSetup();
	}

	//middleware and routes config
	private config(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		// serving static files
		this.app.use(express.static("public"));
		// routes
		this.app.use(routes);
		// dev logs
		this.app.use(morgan("dev"));
		// request security
		this.app.use(helmet());
		// form data parser
		this.app.use(formidable());
		// jwt encryptation
		// this.app.use(jwt({ secret: secretHash, algorithms: ["HS256"] }));
		// unauthorized error middleware
		this.app.use(
			(err: any, req: Request, res: Response, next: NextFunction) => {
				if (err.name === "UnauthorizedError") {
					res.status(401).send("invalid token...");
				}
			}
		);
		// console logging request params
		this.app.use(
			(
				req: express.Request,
				res: express.Response,
				next: express.NextFunction
			) => {
				console.log("Form data ::: ");
				console.log("fields :", req.fields);
				console.log("files :", req.files);
				console.log("Headers :::", req.headers);

				next();
			}
		);
	}

	private async mongoSetup(): Promise<void> {
		mongoose.Promise = global.Promise;
		try {
			console.info("INITIALIZING DATABASE ...");
			await mongoose.connect(this.mongoUrl);
			console.info("DATABASE INITIALIZED :::");
		} catch (error) {
			console.error(error);
		}
	}
}

export default new App().app;
