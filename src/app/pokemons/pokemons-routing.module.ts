import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon.componant';
import { DetailPokemonComponent } from './detail-pokemon.componant';
import { EditPokemonComponent } from './edit-pokemon.component';

import { AuthGuard } from '../auth-guard.service';
import { ListPokeApiComponent } from '../list-poke-api/list-poke-api.component';
import { DetailPokemonApiComponent } from '../detail-pokemon/detail-pokemon-api.component';

const pokemonsRoutes: Routes = [
{
path: 'pokemons',
canActivate: [AuthGuard],
children:[
{ path: 'pokeapi', component: ListPokeApiComponent },
{ path: 'all', component: ListPokemonComponent },
{ path: 'edit/:id', component: EditPokemonComponent},
{ path: ':id', component: DetailPokemonComponent },
{ path: 'pokeapi/:id', component:  DetailPokemonApiComponent},]
}
];
@NgModule({
	imports: [
	RouterModule.forChild(pokemonsRoutes)
	],
	exports: [RouterModule]
})
export class PokemonRoutingModule {}
