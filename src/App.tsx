import { Grid, GridItem, Show } from "@chakra-ui/react";
import MovieGrid from "./Components/MovieGrid";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Grid
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
