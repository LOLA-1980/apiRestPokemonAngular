
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon')
      .subscribe(data => {
        this.pokemons = data.results;
      });
  }
}