import express, { Express } from 'express';
import dotenv from 'dotenv';
import corsMiddleware from './src/infrastructure/middlewares/cors.middleware';
import pokemonRouter from './src/infrastructure/routes/pokemon.router';

dotenv.config();

const port = process.env.PORT || 8000;

// Create app
const app: Express = express();

// Configure generic middlewares
app.use(corsMiddleware);
app.use(express.json());

// Configure routes
app.use('/pokemons', pokemonRouter);

// Listen on specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
