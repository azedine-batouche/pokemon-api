import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'edit-pokemon',
  template: `
  <div class="container p-5">
    <div class="card-detail-pokemon mx-auto p-4 border border-secondary rounded text-center">
    <h2 class="header center">Editer {{ pokemon?.name }}</h2>
		<p class="text-center">
			<img *ngIf="pokemon" [src]="pokemon.picture"/>
		</p>
    <pokemon-form [pokemon]="pokemon"></pokemon-form>
</div>
   <div>
  `,
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon = null;
  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }
}
