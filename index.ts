import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from "cors"

const app = express();

app.use(
  morgan("dev"),
  helmet(),
  cors()
)

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})