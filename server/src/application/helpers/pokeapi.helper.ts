import Pokemon from '../../domain/pokemon/pokemon.model';
import fetch from 'cross-fetch';
import { Page, PaginationPokemon } from '../../infrastructure/shared/interfaces';

class PokeapiHelper {

    makeUserFriendlyString(input: string): string {
        let output = input.replace('-', ' ').trim();
        output = output.charAt(0).toUpperCase() + output.slice(1);
        return output;
    }

    async getPokemonById(id: number): Promise<Pokemon | null> {
        let pokemon = null;

        // Hit Pokeapi endpoint for Pokemon
        await fetch(`${process.env.POKEAPI_BASE_URL}/pokemon/${id}`)
            .then((response: Response) => response.json())
            .then((body: any) => {
                // Get Pokemon name, types and moves
                const name = this.makeUserFriendlyString(body.name);
                const types = body.types.map((type: any) => {
                    return this.makeUserFriendlyString(type.type.name);
                });
                const moves = body.moves.map((move: any) => {
                    return this.makeUserFriendlyString(move.move.name);
                });

                // Create pokemon
                pokemon = new Pokemon(
                    body.id,
                    name,
                    body.height,
                    body.weight,
                    body.sprites.front_default,
                    types,
                    moves,
                );
            })
            .catch((error: any) => console.error(error));

        return pokemon;
    }

    async getPokemonsPage(offset: number, limit: number): Promise<Page> {
        let pokemons: PaginationPokemon[] = [];
        let hasMore = false;

        // Hit Pokeapi endpoit for Pokemons
        await fetch(`${process.env.POKEAPI_BASE_URL}/pokemon/?offset=${offset}&limit=${limit}`)
            .then((response: Response) => response.json())
            .then((body: any) => {
                // Check if we have more pages
                hasMore = (body.next !== null);

                // For each Pokemon
                body.results.forEach((pokemon: any) => {
                    // TODO: find a better way of doing this
                    const id = pokemon.url.match(/https:\/\/pokeapi.co\/api\/v2\/pokemon\/([0-9]+)\//)[1];
                    const name = this.makeUserFriendlyString(pokemon.name);

                    // Add Pokemon ID and name
                    pokemons.push({id, name});
                });
            })
            .catch((error: any) => console.error(error));

        return {
            pokemons: pokemons,
            hasMore: hasMore,
        };
    }

}

export default PokeapiHelper;
