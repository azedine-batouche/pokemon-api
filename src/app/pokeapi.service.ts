import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private  POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';
  private  IMAGE_API_URL = 'https://pokeres.bastionbot.org/images/pokemon/';
  private  DESCRIPTION_API_URL = 'https://pokeapi.co/api/v2/pokemon-species/';

  constructor(private http: HttpClient) { }

  getlistPokemon(nbPokemon: number, pageNumber: number){
    return this.http.get(this.POKE_API_URL + '?limit=' + nbPokemon + '&offset=' + pageNumber);
  }                    

  getdetailPokemon(pokemon: string){
    return this.http.get<any>(pokemon);
         
  }

  getdetailPoke(idPokemon: number) {
    return this.http.get(this.POKE_API_URL + idPokemon);  
  }

  getPokemons(nbPokemon: number, nbPage: number) {
    return this.http.get(this.POKE_API_URL + '?limit=' + nbPokemon + '&offset:' + nbPage)
    .toPromise()
    .then((response: Response) => response['results'])
    .then(items => items.map((item) => {
      return { 
        id: item.url.split(/\//)[6],
        name: item.name,
        url:  item.url,
        urlImage: this.IMAGE_API_URL + item.url.split(/\//)[6] + '.png'
      };
    }));
  };

  getPokemonSearchFromApi(key: string) {
    return this.http.get(this.POKE_API_URL + key);     
  }

  getdescription(idPokemon: number){
    return this.http.get(this.DESCRIPTION_API_URL + idPokemon);
  }
}
