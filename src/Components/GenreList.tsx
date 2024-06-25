import { List, ListItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenreResponse {
  genres: Genre[];
}

const GenreList = () => {
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

  return (
    <>
      {error && <p>{error}</p>}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id}>{genre.name}</ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
