import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, forkJoin, map, Observable, of, switchMap} from 'rxjs';
import {
  ApiResponseJuguete,
  ApiResponsePokeAPI,
  ApiResponseRM,
  CharacterRM,
  Juguete,
  MiPokemon, PokemonData, PokemonDetail,
  Post
} from '../common/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly APIRM = 'https://rickandmortyapi.com/api/character/';
  private readonly urlPoke = 'https://pokeapi.co/api/v2/pokemon/';


  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getJuguetes(): Observable<Juguete[]>{
    const data$ = this.httpClient.get<{juguetes: {juguetes: Juguete[]}}>('https://api-juguetes.vercel.app/api/v2/juguete/juguetes?page=1');

    const dataPiped$ = data$.pipe(map(data => data.juguetes.juguetes));
    return dataPiped$;
  }
  getJuguete(): Observable<Juguete>{
    return this.httpClient.get<Juguete>('https://api-juguetes.vercel.app/api/v2/juguete/juguete/674f64590d73194a50dcb243');
  }

  getCharacter(name: string): Observable<CharacterRM[]>{

    const observable$ = this.httpClient.get<ApiResponseRM>(this.APIRM + '?name='+name);
    const observableTransformed$ =observable$.pipe(map(data => {
        console.log(name, data.results);
      return data.results
      }),
        catchError(err => {
          return of([]);
        }));
    return observableTransformed$;
  }

  getCharacterOS(): Observable<CharacterRM>{
    return this.httpClient.get<ApiResponseRM>(this.APIRM)
      .pipe(map((response: ApiResponseRM) => response.results), // Cogemos el array de personajes del objeto de la API
        map((data: CharacterRM[]) => {
          const num = Math.floor(Math.random() * data.length);
          return data[num].id;
        }), // Genero aleatorio de 1 a 20 por los ids de Rick y Morty
        switchMap((id: number) => this.httpClient.get<CharacterRM>(this.APIRM + id)
          // Únicamente devolvemos dentro del Observable el personaje con id random que haya salido
        ))
  }
  getJuguetesOS(): Observable<Juguete>{
    const apiJuguetes = 'https://api-juguetes.vercel.app/api/v2/juguete/';
    return this.httpClient.get<ApiResponseJuguete>(apiJuguetes+ 'juguetes?page=1')
      .pipe(map((response: ApiResponseJuguete) => response.juguetes.juguetes), // Cogemos el array de personajes del objeto de la API
        map((data: Juguete[]) => {
          const num = Math.floor(Math.random() * data.length);
          return data[num]._id;
        }), // Genero aleatorio de 1 a 20 por los ids de Juguetes
        switchMap((id: string) => this.httpClient.get<Juguete>(apiJuguetes + 'juguete/' + id)
          // Únicamente devolvemos dentro del Observable el juguete con _id random que haya salido
        ))
  }

  getPoke(): Observable<MiPokemon[]>{
    return this.httpClient.get<ApiResponsePokeAPI>(this.urlPoke).pipe(
      map(pokeData => pokeData.results),
      switchMap(pokes => forkJoin<MiPokemon[]>(
        pokes.map((poke: PokemonData) => this.getData(poke))
      ))
    )
  }

  private getData(poke: PokemonData): Observable<MiPokemon> {
    return this.httpClient.get<PokemonDetail>(
      poke.url
    ).pipe(
      map(data => ({...poke,...data.sprites.other["official-artwork"]}))
    )
  }
}
