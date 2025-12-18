import { Routes } from '@angular/router';
import {Ejemplo01} from './components/rxjs/ejemplo01/ejemplo01';
import {Frios} from './components/rxjs/frios/frios';
import {Calientes} from './components/rxjs/calientes/calientes';
import {Operadores} from './components/rxjs/operadores/operadores';
import {SwitchMapPage} from './components/rxjs/switch-map-page/switch-map-page';
import {OrdenSuperior} from './components/rxjs/orden-superior/orden-superior';
import {SubjectPage} from './components/rxjs/subject-page/subject-page';
import {BehaviorSubjectPage} from './components/rxjs/behavior-subject-page/behavior-subject-page';
import {CartSignal} from './components/rxjs/cart-signal/cart-signal';
import {ForkJoin} from './components/rxjs/fork-join/fork-join';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ejemplo01',
    pathMatch: 'full',
  },
  {
    path: 'ejemplo01',
    component: Ejemplo01
  },
  {
    path: 'frios',
    component: Frios
  },
  {
    path: 'calientes',
    component: Calientes
  },
  {
    path: 'operadores',
    component: Operadores
  },
  {
    path: 'switch-map',
    component: SwitchMapPage
  },
  {
    path: 'orden-superior',
    component: OrdenSuperior
  },
  {
    path: 'subject',
    component: SubjectPage
  },
  {
    path: 'behavior-subject',
    component: BehaviorSubjectPage
  },
  {
    path: 'cart-signals',
    component: CartSignal
  },
  {
    path: 'fork-join',
    component: ForkJoin
  }
];
