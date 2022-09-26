export interface FilmConnection {
  films: Film[];
}

export interface Film {
  title: string;
  director: string;
  producers: string[];
  releaseDate: string;
  planetConnection: PlanetConnection;
}

export interface PlanetConnection {
  totalCount: number;
  planets: Planet[];
}

export interface Planet {
  name: string;
  population?: number;
}

export interface People {
  person: {
    name: string;
    filmConnection: FilmConnection;
  };
}
