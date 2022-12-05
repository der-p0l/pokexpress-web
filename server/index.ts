import express, { Express } from 'express';
import dotenv from 'dotenv';
import corsMiddleware from './src/infrastructure/middlewares/cors.middleware';
import paymentRouter from "./src/infrastructure/routes/payment.router";
import userRouter from "./src/infrastructure/routes/user.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(corsMiddleware);
app.use(express.json());

app.use('/payments', paymentRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
