import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError, delay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class PokemonsService {

    constructor(private http: HttpClient, private router: Router) {}

    private pokemonsUrl = 'api/pokemons/';

    private handleError<T> ( operation='operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.error(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    // Retourne tous les Pokémons
    getPokemons(): Observable<Pokemon[]> {
        // return POKEMON;
        return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
            tap(_ => console.log(`fetched pokemons`)),
            catchError(this.handleError(`getPokemons`, []))
        );
    }

    // Retourne le pokémon avec l'identifiant passer en parametre
    getPokemon(id: number): Observable<Pokemon> {
        const pokemons = this.getPokemons();
        const url = `${this.pokemonsUrl}${id}`;
        return this.http.get<Pokemon>(url).pipe(
            tap(_ => console.log(`fetched pokemon id=${id}`)),
            catchError(this.handleError<Pokemon>(`get pokemon id=${id}`))
        );
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOption = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.put(this.pokemonsUrl, pokemon, httpOption).pipe(
            tap(_ => console.log(`updated pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('UpdatedPokemon'))
        );
    }

    searchPokemon(term: string): Observable<Pokemon[]> {
		if (!term.trim()) {
		return of([]);}
	return this.http.get<Pokemon[]>(`${this.pokemonsUrl}?name=${term}`).pipe(
        tap(_ => console.log(`Found pokemon matching "${term}" `)),
        catchError(this.handleError<Pokemon []>('SearchPokemon', [])));}

    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}${pokemon.id}`;
        const httpOption  = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
         };
    return this.http.delete<Pokemon>(url, httpOption).pipe(
         tap(_ => console.log(`deleted pokemon id=${pokemon.id}`)),
         catchError(this.handleError<Pokemon>('deletedPokemon'))
         );
    }

    // Retourne tous les types d'un pokemon
    getPokemonType(): string[] {
        return ['Feu', 'Eau', 'Plante', 'Inscete', 'Normal', 'Electrik', 'Poisson', 'Fée', 'Vol'];
    }
}
