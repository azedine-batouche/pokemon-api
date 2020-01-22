import { Component } from '@angular/core';

@Component({
	selector: 'page-404',
  template: `
  <div class="container">
    <div class='text-center' style="margin-top:100px; border: 1px solid #C7C7C7; padding:40px 0px;">
      <h2 class="display-3 text-secondary">404</h2>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons/all" class="btn btn-outline-info m-3 px-3 py-2">
        Retourner à l' accueil
      </a>
    </div>
</div>
  `
})
export class PageNotFoundComponent { }
