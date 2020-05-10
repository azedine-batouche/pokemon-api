import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {


   pokemons: Pokemon[];
   title = 'Liste des pokémons';

    constructor (private router: Router, private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
     this.pokemonsService.getPokemons().subscribe( pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon) {
   // alert("Vous avez cliqué sur: " + pokemon.name);
    const link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }
}
