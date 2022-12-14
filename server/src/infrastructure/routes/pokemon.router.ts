import express, { Express, NextFunction, Request, Response } from 'express';
import PokemonUseCases from '../../application/useCases/pokemon.useCases';
import PokemonController from '../controllers/pokemon.controller';
import PokemonRepository from '../repositories/pokemon.repository';

const router: Express = express();
const repository: PokemonRepository = new PokemonRepository();
const useCases: PokemonUseCases = new PokemonUseCases(repository);
const controller: PokemonController = new PokemonController(useCases);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    controller.list(req.query)
        .then((response) => res.send(response));
});

router.get("/:pokemon_id", (req: Request, res: Response, next: NextFunction) => {
    controller.view(req.params.pokemon_id)
        .then((response) => res.send(response));
});

export default router;
