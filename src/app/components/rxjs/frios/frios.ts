import {Component, inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Juguete, Post} from '../../../common/interfaces';
import {DataService} from '../../../services/data-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-frios',
  imports: [
    AsyncPipe
  ],
  templateUrl: './frios.html',
  styleUrl: './frios.css',
})
export class Frios implements OnInit {
  private readonly dataService: DataService = inject(DataService);
  data$!: Observable<Juguete[]>;
  dataOne$!: Observable<Juguete>;
  datos: Juguete[] = [];

  ngOnInit() {
    this.loadJuguetes();
    this.loadJuguete();
  }

  private loadJuguetes() {
    this.data$ = this.dataService.getJuguetes();
    this.data$.subscribe(data => this.datos = data);
  }
  private loadJuguete() {
    this.dataOne$ = this.dataService.getJuguete();
  }
}
