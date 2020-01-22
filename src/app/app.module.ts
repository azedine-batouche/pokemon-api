import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemon.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found.component'; 

import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ListPokeApiComponent } from './list-poke-api/list-poke-api.component';
import { DetailPokemonApiComponent } from './detail-pokemon/detail-pokemon-api.component';
import { PokemonTypeColorPipe } from './pokemons/pokemon-type-color.pipe';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    ListPokeApiComponent,
    DetailPokemonApiComponent,
    PokemonTypeColorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true} ),
    PokemonsModule,
    LoginRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
