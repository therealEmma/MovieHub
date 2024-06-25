export interface Genres {
  id: number;
  name: string;
}

export interface FetchGenreResponse{
  genres: Genres[]
}

const useGenres = () => {};

export default useGenres;
