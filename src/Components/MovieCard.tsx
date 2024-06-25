import { Card, CardBody, HStack, Heading, Image, Box } from "@chakra-ui/react";
import { Movie } from "../Hooks/useMovies";
import CriticScore from "./CriticScore";
import MiniWriteUp from "./MiniWriteUp";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={20} overflow={"hidden"} role="group">
      <Image src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt={movie.title} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Heading fontSize={"2xl"}>{movie.title}</Heading>
          <CriticScore score={movie.popularity} />
        </HStack>
        <Box 
          mt={2}
          opacity={0} 
          _groupHover={{ opacity: 1, maxH: '100px' }} 
          transition="opacity 0.3s, max-height 0.3s"
          maxH="0"
          overflow="hidden"
        >
          <MiniWriteUp text={movie.overview} />
        </Box>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
