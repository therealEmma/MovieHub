import {  Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Movie } from "../Hooks/useMovies"
import CriticScore from "./CriticScore"

interface Props{
     movie : Movie
}

const MovieCard = ({movie} : Props) => {
  return (
    <Card borderRadius={20} overflow={"hidden"}>
        <Image src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} />
        <CardBody>
          <HStack justifyContent={"space-between"}> 
            <Heading fontSize={'2xl'}>{movie.title}</Heading>
            <CriticScore score={movie.popularity} />
          </HStack>
        </CardBody>
    </Card>
  )
}

export default MovieCard