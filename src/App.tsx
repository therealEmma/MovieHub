import { Grid, GridItem, Show } from "@chakra-ui/react";
import MovieGrid from "./Components/MovieGrid";

import GenreList from "./Components/GenreList";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Grid paddingX={5}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <MovieGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
