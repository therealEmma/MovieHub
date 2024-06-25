import { Card, CardBody, HStack, Heading, Image, Box } from "@chakra-ui/react";
import { Movie } from "../Hooks/useMovies";
import CriticScore from "./CriticScore";
import MiniWriteUp from "./MiniWriteUp";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card 
      borderRadius={20} 
      overflow={"hidden"} 
      position="relative"
      _hover={{ ".hoverText": { opacity: 1, maxHeight: '100px' } }}
    >
      <Image src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt={movie.title} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Heading fontSize={"2xl"}>{movie.title}</Heading>
          <CriticScore score={movie.popularity} />
        </HStack>
        <Box 
          mt={2}
          className="hoverText"
          opacity={0} 
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
