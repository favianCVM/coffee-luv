import app from './app';
import https from 'https';
import fs from 'fs';
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 3001;

// const httpsOptions = {
//     key: fs.readFileSync('./config/key.pem'),
//     cert: fs.readFileSync('./config/cert.pem')
// }

https.createServer({}, app).listen(PORT, () => {
    console.log('Express server listening on port ::: ' + PORT);
})