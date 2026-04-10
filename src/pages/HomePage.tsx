import { Box, Grid, GridItem } from "@chakra-ui/react";
import CardGrid from "@/components/home-page/CardGrid";
import GridHeading from "@/components/home-page/GridHeading";

const HomePage = () => {
  return (
    <Grid padding={5} w={"100%"}>
      <GridItem>
        <Box padding={5}>
          <GridHeading />
        </Box>
        <CardGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
