import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon-api.component.html',
  styleUrls: ['./detail-pokemon-api.component.scss']
})
export class DetailPokemonApiComponent implements OnInit {

  private idPokemon: number
  private listDetail: Object;
  private name: string;
  private weight: number;
  private height: number;
  private types: string[] = [];
  private baseStat: number[] = [];
  private abilities: string[] = [];
  private moves: string[] = [];
  private baseExp: number;
  private description:  string[] = [];



  constructor(private pokeService: PokeapiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDescription();
    this.detailPokemon();
  }

  getDescription() {
    this.idPokemon = +this.route.snapshot.paramMap.get('id');
    this.pokeService.getdescription(this.idPokemon).pipe(
    ).subscribe(
      (res: Response) => {
        res['flavor_text_entries'].forEach((element, index) => {
          if (element['language']['name'] === 'fr' && element['flavor_text']!=='') {
            return this.description.push(element['flavor_text']);
          }
        })
      }
    );
  }

  detailPokemon() {
    this.idPokemon = +this.route.snapshot.paramMap.get('id');
    this.pokeService.getdetailPoke(this.idPokemon).subscribe(
      (res: Response) => {
          this.name = res['name'],
          this.weight = res['weight'],
          this.height = res['height'],
          this.baseExp = res['base_experience'],
          res['types'].forEach(element => { this.types.push(element['type']['name']) }),
          res['stats'].forEach(stats => { this.baseStat.push(stats['base_stat']) }),
          res['abilities'].forEach(abilities => { this.abilities.push(abilities['ability']['name']) }),
          res['moves'].forEach(moves => { this.moves.push(moves['move']['name']) })
      },
    );
  }

  gobackToList() {
    this.router.navigate(['/pokemons/pokeapi']);
  }
}