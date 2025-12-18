import {Component, inject, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject, switchMap} from 'rxjs';
import {CharacterRM} from '../../../common/interfaces';
import {DataService} from '../../../services/data-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-switch-map-page',
  imports: [
    AsyncPipe
  ],
  templateUrl: './switch-map-page.html',
  styleUrl: './switch-map-page.css',
})
export class SwitchMapPage implements OnInit {
    searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    characters$!: Observable<CharacterRM[]>;
    private readonly dataService: DataService = inject(DataService);

  ngOnInit() {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.characters$ = this.searchTerm$.pipe(
      switchMap((term:string) => this.dataService.getCharacter(term))
    )
  }

  search(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }
}
