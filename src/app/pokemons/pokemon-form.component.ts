import {Component, OnInit} from '@angular/core/core';
import { PokemonsService } from './pokemons.service';
import { Router } from '@angular/router';



@Component({
    selector:'pokemon-form',
    templateUrl: './pokemon-form.component.html'
})

export class PokemonFormComponent implements  OnInit {


    constructor(private pokemonService: PokemonsService, private router: Router){}

    ngOnInit(): void{

    }
}