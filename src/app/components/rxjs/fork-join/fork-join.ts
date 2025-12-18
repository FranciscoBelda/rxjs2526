import {Component, inject, OnInit} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {MiPokemon} from '../../../common/interfaces';

@Component({
  selector: 'app-fork-join',
  imports: [],
  templateUrl: './fork-join.html',
  styleUrl: './fork-join.css',
})
export class ForkJoin implements OnInit {
    private readonly dataService: DataService = inject(DataService);
    pokemons: MiPokemon[] = [];

    ngOnInit() {
      this.loadPokemons();
    }

  private loadPokemons() {
    this.dataService.getPoke().subscribe(
      {
        next: data => {
          this.pokemons = data;
        },
        error: err => {
          console.error(err);
        }
      }
    )
  }
}
