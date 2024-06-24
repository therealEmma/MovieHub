import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text, Box, Image, SimpleGrid } from "@chakra-ui/react";

interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
}

interface FetchResponse {
  results: Movie[];
}

const Movie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchResponse>("/3/movie/popular")
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} padding={10}>
        {movies.map((movie) => (
          <Box key={movie.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
              alt={movie.title}
              width="100%"
              height="auto"
            />
            <Box p="6">
              <Text fontSize="xl" fontWeight="bold">{movie.title}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Movie;
