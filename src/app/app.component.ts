import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemons/pokemon';
import { POKEMON } from './pokemons/mock-pokemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  private pokemons: Pokemon[];
  private title: string = "Liste des pokémons";
  private age:number= 20;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pokemons = POKEMON;
  }

  selectPokemon(pokemon: Pokemon) {
    alert("Vous avez cliqué sur: " + pokemon.name);
  }
}
