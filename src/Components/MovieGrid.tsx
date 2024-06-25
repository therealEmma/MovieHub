import { Text, SimpleGrid, Box } from "@chakra-ui/react";
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
        spacing={5}
        paddingX={5}
      >
        {movies.map((movie) => (
          <Box key={movie.id} role="group">
            <MovieCard movie={movie} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
