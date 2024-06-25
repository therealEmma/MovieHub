import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
  popularity: number
}

export interface FetchResponse {
  results: Movie[];
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponse>("/3/movie/popular", { signal: controller.signal })
      .then((res) => {
        setMovies(res.data.results)
        console.log(res.data.results)
      })
      .catch((err) => {
        if (!(err instanceof CanceledError)) {
          setError(err.message);
        }
      });

    return () => controller.abort();
  }, []);

  return { movies, error };
};

export default useMovies;
