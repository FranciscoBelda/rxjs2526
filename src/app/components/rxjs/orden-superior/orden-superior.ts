import {Component, inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CharacterRM, Juguete} from '../../../common/interfaces';
import {DataService} from '../../../services/data-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-orden-superior',
  imports: [
    AsyncPipe
  ],
  templateUrl: './orden-superior.html',
  styleUrl: './orden-superior.css',
})
export class OrdenSuperior implements OnInit {
  data$!: Observable<CharacterRM>;
  dataJ$!: Observable<Juguete>;
  private readonly dataService: DataService = inject(DataService);

  ngOnInit() {
    this.loadCharacter();
  }

  loadCharacter() {
    this.data$ =  this.dataService.getCharacterOS();
    this.dataJ$ =  this.dataService.getJuguetesOS();
  }

}
