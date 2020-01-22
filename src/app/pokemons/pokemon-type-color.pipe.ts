import { Pipe, PipeTransform } from '@angular/core';

/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'fire':
        color = 'bg-danger';
        break;
      case 'water':
        color = 'bg-primary';
        break;
      case 'grass':
        color = 'bg-success';
        break;
      case 'bug':
        color = 'bg-secondary';
        break;
      case 'normal':
        color = 'bg-light text-primary';
        break;
      case 'flying':
        color = 'bg-warning';
        break;
      case 'poison':
        color = 'bg-info text-light';
        break;
      case 'Fée':
        color = 'bg-warning text-info';
        break;
      case 'psy':
        color = 'bg-dark text-danger';
        break;
      case 'electric':
        color = 'bg-danger text-warning';
        break;
      case 'ground':
        color = 'bg-warning';
        break;
      default:
        color = 'bg-dark text-light';
        break;
    }
    return color ;
  }
}