import Pokemon from "../../domain/pokemon/pokemon.model";
import PokemonRepository from "../../infrastructure/repositories/pokemon.repository";
import { Page } from "../../infrastructure/shared/interfaces";
import PokeapiHelper from "../helpers/pokeapi.helper";

class PokemonUseCases {

    private repository: PokemonRepository;
    private pokeapi: PokeapiHelper;
    private paginationLimit: number;

    constructor(repository: PokemonRepository) {
        this.repository = repository;
        this.pokeapi = new PokeapiHelper();
        this.paginationLimit = parseInt(process.env.PAGINATION_LIMIT || "1", 10);
    }

    async getPokemonsPage(query: string, page: number): Promise<Page> {
        // TODO: add queried page functionality
        const limit = this.paginationLimit;
        const offset = (page * limit) - limit;

        return await this.pokeapi.getPokemonsPage(offset, limit);
    }

    async getOnePokemon(id: number): Promise<Pokemon | null> {
        // Try to get pokemon from local repo
        let pokemon = this.repository.findById(id);
        // If couldn't get pokemon
        if (!pokemon) {
            // Get it from Pokeapi
            pokemon = await this.pokeapi.getPokemonById(id);
            // If we got a pokemon
            if (pokemon) {
                // Add it to the local repo
                this.repository.add(pokemon);
            }
        }

        return pokemon;
    }

}

export default PokemonUseCases;
