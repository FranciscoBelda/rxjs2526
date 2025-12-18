import { Component } from '@angular/core';
import {Subject} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-subject-page',
  imports: [
    AsyncPipe
  ],
  templateUrl: './subject-page.html',
  styleUrl: './subject-page.css',
})
export class SubjectPage {
    mySubject: Subject<string> = new Subject<string>();
    dato: string = '';

    concatena(){
      const palabra = 'Holaaaa '+ Math.floor(Math.random()*1000);
      this.mySubject.next(palabra);
    }
    subscribete(){
      this.mySubject.subscribe({
        next: value => {
          this.dato = value;
        },
        error: err => {
          console.error(err);
        }
      })
    }


}
