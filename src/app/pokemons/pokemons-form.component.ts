import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
import { Router } from '@angular/router';

@Component({
    selector: 'pokemon-form',
    templateUrl: './pokemons-form.component.html',
    styleUrls: ['./pokemons-form.component.css']
})
export class PokemonsFormComponent implements OnInit {


    @Input() pokemon: Pokemon;
    types: Array<string>;
    isAddForm: boolean;

    constructor(
        private pokemonsService: PokemonsService,
        private router: Router) {}

    ngOnInit(): void {
       this.types = this.pokemonsService.getPokemonType();
    }

    // Détermine si le type passé en parametres appartient ou non au pokémon en cour d'édition
    hasType(type: string): boolean {
        const index = this.pokemon.types.indexOf(type);
        if(~index) return true;
        return false;
    }

    isTypesValid(type: string): boolean {
        if (this.pokemon.types.length >= 3 && !this.hasType(type) ) {
            return false;
        }
        return true;
    }

    // Méthode appelée lorsque l'utilisateur ajout ou retir un type au pokémon en cours d'édition
    selectType($event: any, type: string): void {
        const checked = $event.target.checked;
        if (checked) {
            this.pokemon.types.push(type);
        }
        else {
            const index = this.pokemon.types.indexOf(type);
            if (~index) {
                this.pokemon.types.splice(index,1);
            }
        }
    }

    // La methode est appelé lorsque le formulaire est soumis.
    onSubmit(): void {
        this.pokemonsService.updatePokemon(this.pokemon)
        .subscribe(() => this.goBack());
    }

    goBack(): void {
        const link = ['/pokemons', this.pokemon.id];
        this.router.navigate(link);
    }
}