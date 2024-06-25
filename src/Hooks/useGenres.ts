import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenreResponse {
  genres: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    apiClient
      .get<FetchGenreResponse>("/3/genre/movie/list")
      .then((res) => {
        console.log(res.data.genres); // Correct property name
        setGenres(res.data.genres);
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message);
      });
  }, []);

  return {genres, error}
};

export default useGenres;
