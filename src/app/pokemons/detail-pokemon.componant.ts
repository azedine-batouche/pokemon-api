import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
import { Observable, of } from 'rxjs';

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
		 this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
	}

	deletePokemon(pokemon: Pokemon): void{
		this.pokemonsService.deletePokemon(pokemon).subscribe(()=>this.goBack());
	}

	goEdit(pokemon: Pokemon): void{
		let link = ['/pokemons/edit', pokemon.id];
		this.router.navigate(link);
	}

	goBack(): void {
		this.router.navigate(['/pokemons/all']);
	}

}