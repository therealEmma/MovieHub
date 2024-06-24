import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Movie } from "../Hooks/useMovies"

interface Props{
     movie : Movie
}

const MovieCard = ({movie} : Props) => {
  return (
    <Card borderRadius={20} overflow={"hidden"}>
        <Image src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} />
        <CardBody>
            <Heading fontSize={'2xl'}>{movie.title}</Heading>
        </CardBody>
    </Card>
  )
}

export default MovieCard