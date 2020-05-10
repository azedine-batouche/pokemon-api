import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemons/pokemon';
import { POKEMON } from './pokemons/mock-pokemons';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthGuard } from './auth-guard.service';

@Component({
  selector: 'pokemon-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


   pokemons: Pokemon[];
   showNav: BehaviorSubject<false>;
    show = false;
   show$: Observable<boolean>;


  constructor( private authService: AuthService, private authGuard: AuthGuard ,private router: Router ){}

  ngOnInit(): void {
    this.pokemons = POKEMON;
     this.display();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
 
  gotoApi() {
    this.router.navigate(['/pokemons/poke']);
  }

  display() {
    return this.authService.displayNav();
  }
  
}
