import { Injectable } from "@angular/core";
import { Pokemon } from './pokemon';
import { POKEMON } from './mock-pokemons';


@Injectable()
export class PokemonsService{


    //Retourne tous les Pokémons
    getPokemons(): Pokemon[] {
        return POKEMON;
    }

    //Retourne le pokémon avec l'identifiant passer en parametre
    getPokemon(id: number): Pokemon {
        let pokemons = this.getPokemons();

        for(let index= 0;index < pokemons.length; index++){
            if(pokemons[index].id == id)
                return pokemons[index];
        }
    }

    //Retourne tous les types d'un pokemon
    getPokemonType(): string[] {
        return ['Feu','Eau','Plante','Inscete','Normal','Electrik','Poisson','Fée','Vol'];
    }
}