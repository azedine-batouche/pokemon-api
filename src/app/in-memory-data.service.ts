import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMON } from './pokemons/mock-pokemons';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let pokemons = POKEMON;
		return { pokemons };
	}
}