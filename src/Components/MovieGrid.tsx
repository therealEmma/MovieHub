import { Text, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import useMovies from "../Hooks/useMovies";

const MovieGrid = () => {
  const { movies, error } = useMovies();
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
