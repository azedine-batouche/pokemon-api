import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemons-routing.module';

import { ListPokemonComponent } from './list-pokemon.componant';
import { DetailPokemonComponent } from './detail-pokemon.componant';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColor } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';
import { PokemonsFormComponent } from './pokemons-form.component';
@NgModule({
	imports: [
        CommonModule,
        PokemonRoutingModule,
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		BorderCardDirective,
		PokemonTypeColor,
		PokemonsFormComponent,
	],
	providers: [PokemonsService]
})
export class PokemonsModule { }