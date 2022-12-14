import express, { Express } from 'express';
import dotenv from 'dotenv';
import corsMiddleware from './src/infrastructure/middlewares/cors.middleware';
import pokemonRouter from "./src/infrastructure/routes/pokemon.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(corsMiddleware);
app.use(express.json());

app.use('/pokemons', pokemonRouter);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
