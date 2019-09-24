import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {


  private pokemons: Pokemon[];
  private title: string = "Liste des pokémons";
  private age:number= 20;

    constructor(private router: Router, private pokemonsService: PokemonsService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pokemons = this.pokemonsService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon) {
   // alert("Vous avez cliqué sur: " + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
