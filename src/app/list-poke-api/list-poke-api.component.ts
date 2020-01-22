import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { Router } from '@angular/router';
import { map, filter, tap, concatMap, flatMap, delay, mergeMap, switchMap, take, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PokeApi } from '../pokeApi';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-poke-api',
  templateUrl: './list-poke-api.component.html',
  styleUrls: ['./list-poke-api.component.scss']
})
export class ListPokeApiComponent implements OnInit, AfterViewInit {

  listPokemons: PokeApi[];
  searchPokemon: PokeApi = new PokeApi();
  searchAccess = false;
  errorSearch = false;
  success = false;
  loading = false;
  private nbPok = 18;
  private nbPokPage= 18;
  private nbMorePok = 18;
  private ctnSearch: FormControl;

  @ViewChild('boxSearch', {static: false}) input: ElementRef;
 

  constructor(private pokeApiService: PokeapiService, private router: Router) { }

  ngOnInit() {
    this.getPokeApi(this.nbPok , this.nbPokPage);
  }
  ngAfterViewInit(){

  }
  
   pokemon(nbPokemon: number, nbPage: number){
     this.pokeApiService.getlistPokemon(nbPokemon, nbPage).pipe(
     map((res: JSON ) => res['results']),
    ).subscribe(
       res => { console.log(res)},
       err => console.log(err)
     );
  }

  getPokeApi(nbPokemon: number, nbPage: number){
   return  this.pokeApiService.getPokemons(nbPokemon, nbPage).then( 
      res => {this.listPokemons = res, this.success = true },
      err => {this.success = false}
    )
  }

  getMorePokemon(){
    this.nbPok += this.nbMorePok;
    this.nbPokPage += this.nbMorePok;
    this.getPokeApi(this.nbPok, this.nbMorePok);
  }
  detailPokemon(idPokemon: number){
    this.router.navigate(['/pokemons/pokeapi',idPokemon])
  }
   
  search(key: string){
    this.loading = true;
    key = key.trim();
    if (key && key !=='') {
      key = key.toLowerCase();
    this.pokeApiService.getPokemonSearchFromApi(key).pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(
      (results: Response) => {
        this.searchPokemon.name = results['name'],
        this.searchPokemon.id = results['id'],
        this.searchPokemon.urlImage = 'https://pokeres.bastionbot.org/images/pokemon/' + results['id'] + '.png',
        this.searchAccess = true;
        this.errorSearch = false;
        this.loading = false;
      },
      errors => {
        this.errorSearch = true;
        this.searchAccess = true;
        this.loading = false
      }
    );
    }
  }

  goToList(){
    this.searchAccess = false;
    this.router.navigate(['/pokemons/pokeapi']);
    this.input.nativeElement.value ='';
  }
}
