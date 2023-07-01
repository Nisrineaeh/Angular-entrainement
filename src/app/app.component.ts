import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{  pokemonList[1] }} !</h1>  <h2>Pokémons</h2>`
})
export class AppComponent implements OnInit {
  pokemonList = ['Bulbizarre','Salamèche','Carapuce'];

  ngOnInit(){
    console.table(this.pokemonList);
  }
}