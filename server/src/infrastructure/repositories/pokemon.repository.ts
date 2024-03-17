import Pokemon from '../../domain/pokemon/pokemon.model';

class PokemonRepository {

    private database: Pokemon[];

    constructor() {
        this.database = [];
    }

    findById(id: number): Pokemon | null {
        const pokemon = this.database.find(
            (pokemon) => pokemon.id === id
        );

        return pokemon || null;
    }

    add(pokemon: Pokemon): Pokemon {
        // Find existing pokemon with greater ID
        const index = this.database.findIndex(
            (cached) => cached.id > pokemon.id
        );

        // If there is a pokemon with a greater ID
        if (index !== -1) {
            // Insert new pokemon at that index
            this.database.splice(index, 0, pokemon);
        } else {
            // Else just push it at the end
            this.database.push(pokemon);
        }

        return pokemon;
    }
}

export default PokemonRepository;
