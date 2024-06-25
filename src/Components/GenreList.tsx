import { Button, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";

interface Props{
    onSelectGenre: (genre: Genre) => void
}


const GenreList = ({onSelectGenre} : Props) => {
  const {genres, error} = useGenres()
  return (
    <>
      {error && <p>{error}</p>}
      <List>
        {genres.map((genre) => (
          <ListItem padding={1} key={genre.id}>
            <Button onClick={() => onSelectGenre(genre)} variant={'link'}>{genre.name}</Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
