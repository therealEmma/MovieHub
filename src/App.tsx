import { Grid, GridItem, Show } from "@chakra-ui/react";
import MovieGrid from "./Components/MovieGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg={"yellow"}>
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg={"green"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area="main">Main</GridItem>
      </Grid>
      <MovieGrid />
    </>
  );
}

export default App;
