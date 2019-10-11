import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent }    from './list-pokemon.componant';
import { DetailPokemonComponent }  from './detail-pokemon.componant';
import { EditPokemonComponent } from './edit-pokemon.component';

import { AuthGuard } from '../auth-guard.service';
// les routes du module Pokémon
// const pokemonsRoutes: Routes = [
// 	{ path: 'pokemons', component: ListPokemonComponent },
// 	{ path: 'pokemon/edit/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
// 	{ path: 'pokemon/:id', component: DetailPokemonComponent }
// ];

const pokemonsRoutes: Routes = [
{
	path:'pokemons',
	canActivate:[AuthGuard],
	children:[
	{ path: 'all', component: ListPokemonComponent },
 	{ path: 'edit/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
	{ path: ':id', component: DetailPokemonComponent }
	]
}
];
@NgModule({
	imports: [
		RouterModule.forChild(pokemonsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PokemonRoutingModule { }