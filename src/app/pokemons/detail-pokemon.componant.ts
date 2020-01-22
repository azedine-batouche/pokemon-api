import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './detail-pokemon.componant.html'
})
export class DetailPokemonComponent implements OnInit {

pokemon: Pokemon = null;

	constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {}

ngOnInit(): void {
	const id = +this.route.snapshot.paramMap.get('id');
	if (!isNaN(id)) {
		this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
		return;
	}
	this.router.navigate(['/pokemons/all']);
}

deletePokemon(pokemon: Pokemon): void {
	this.pokemonsService.deletePokemon(pokemon).subscribe(() => this.goBack());
}

goEdit(pokemon: Pokemon): void {
	const link = ['/pokemons/edit', pokemon.id];
	this.router.navigate(link);
}

goBack(): void {
	this.router.navigate(['/pokemons/all']);
}
}
