import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import formidable from "express-formidable"
import jwt from "express-jwt"
import dotenv from "dotenv"
dotenv.config();

const secretHash: string = process.env.SECRET_HASH || "";

class App {
	public app: express.Application = express();
	// public routePrv: Routes = new Routes();
	// public mongoUrl: string = 'mongodb://localhost/CRMdb';
	public mongoUrl: string = "mongodb://dalenguyen:123123@localhost:27017/CRMdb";

	constructor() {
		this.config();
		console.info("APP INITIALIZATED :::")
		// this.mongoSetup();
		// this.routePrv.routes(this.app);
	}

	//middleware and routes config
	private config(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		// serving static files
		this.app.use(express.static("public"));
		//
		this.app.use(morgan("dev"));
    this.app.use(helmet());
		this.app.use(formidable())
		this.app.use(jwt({ secret: secretHash, algorithms: ['HS256'] }))
		//
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

	private mongoSetup(): void {
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoUrl);
	}
}

export default new App().app;
