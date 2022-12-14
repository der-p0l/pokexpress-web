import PokemonUseCases from "../../application/useCases/pokemon.useCases";
import Pokemon from "../../domain/pokemon/pokemon.model";
import { Page } from "../shared/interfaces";

class PokemonController {

    private useCases: PokemonUseCases;

    constructor(useCases: PokemonUseCases) {
        this.useCases = useCases;
    }

    async list(request: any): Promise<Page> {
        const {
            query = null,
            page = 1,
        } = request;
        // TODO: validate

        return await this.useCases.getPokemonsPage(query, page);
    }

    async view(strId: string): Promise<Pokemon | null> {
        const id = parseInt(strId, 10);
        // TODO: validate
        return await this.useCases.getOnePokemon(id);
    }

}

export default PokemonController;
