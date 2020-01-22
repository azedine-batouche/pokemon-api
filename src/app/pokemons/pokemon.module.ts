import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { ListPokemonComponent } from './list-pokemon.componant';
import { DetailPokemonComponent } from './detail-pokemon.componant';
import { BorderCardDirective } from './border-card.directive';
import { PokemonsService } from './pokemons.service';
import { PokemonsFormComponent } from './pokemons-form.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonSearchComponent } from './search-pokemon.component';
import { LoaderComponent } from '../loader.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../auth-guard.service';
@NgModule({
imports: [
	CommonModule,
	FormsModule,
	PokemonRoutingModule,
],
declarations: [
	PokemonSearchComponent,
	ListPokemonComponent,
	DetailPokemonComponent,
	BorderCardDirective,
	PokemonsFormComponent,
	EditPokemonComponent,
	LoaderComponent,],
providers: [PokemonsService, AuthGuard]
})
export class PokemonsModule {}
