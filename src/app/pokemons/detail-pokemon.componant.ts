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
		// this.pokemons = POKEMON;

		let id = +this.route.snapshot.paramMap.get('id');
		// for (let i = 0; i < this.pokemons.length; i++) {
		// 	if (this.pokemons[i].id == id) {
		// 		//this.pokemon = this.pokemons[i];
			
		// 	}
		// }
		this.pokemon = this.pokemonsService.getPokemon(id);
		

	}
	goBack(): void {
		this.router.navigate(['/pokemons']);
	}

}