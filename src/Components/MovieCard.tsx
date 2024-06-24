import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Movie } from "./MovieGrid"

interface Props{
     movie : Movie
}

const MovieCard = ({movie} : Props) => {
  return (
    <Card>
        <Image src={movie.backdrop_path} />
        <CardBody>
            <Heading>{movie.title}</Heading>
        </CardBody>
    </Card>
  )
}

export default MovieCard