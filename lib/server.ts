import app from "./app";
import https from "https";
import http from "http";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3001;

// const httpsOptions = {
//     key: fs.readFileSync('./config/key.pem'),
//     cert: fs.readFileSync('./config/cert.pem')
// }

const isProduction = process.env.TS_NODE_DEV ? false : true;

console.info(`SERVER :: ${isProduction ? "PRODUCTION" : "DEVELOPMENT"}`);

if (!isProduction)
	http.createServer(app).listen(PORT, () => {
		console.log("Express server listening on port ::: " + PORT);
	});
else if (isProduction)
	https.createServer(app).listen(PORT, () => {
		console.log("Express server listening on port ::: " + PORT);
	});
