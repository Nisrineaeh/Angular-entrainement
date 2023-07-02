import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémons</h1>`
})
export class AppComponent implements OnInit {
  pokemonList = POKEMONS;

  ngOnInit(){
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[11]);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);// toujour nom mais param pokemonListMock
  }
} 