/* POST JsonPlaceholder */
export interface Post{
  title: string;
  body: string;
  id: number;
  userId: number;
}

/* JUGUETEs */
export interface ApiResponseJuguete{
  juguetes: JugueteData;
}

export interface JugueteData{
  juguetes: Juguete[];
}

export interface Juguete{
  _id: string,
  nombre: string,
  imagen: string,
  categoria: string,
  edadMinima: number,
  precio: number
}

/* RICK & MORTY */
export interface ApiResponseRM {
  info: Info
  results: CharacterRM[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}

export interface CharacterRM {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

export interface MiPokemon{
  front_default: string;
  front_shiny: string;
  name: string;
  url: string;
}

export interface ApiResponsePokeAPI{
  results: PokemonData[];
}

export interface PokemonData{
  name: string;
  url: string;
}

export interface PokemonDetail{
  id: number;
  sprites: {
    other: {
      'official-artwork':{
        front_default: string;
        front_shiny: string;
      }
    }
  }

}
