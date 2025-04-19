import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import { Element } from "react-scroll";
import { useEffect, useState } from "react";
import { IExhibits } from "../../interfaces/global.interface";
import { useFirebase } from "../../hooks/use-firebase";
import SectionTitle from "../../components/shared/section-title";

function ExhibitionsSection() {
   const [exhibits, setExhibits] = useState<IExhibits[]>([]);
   const { fetchExhibits } = useFirebase();

   useEffect(() => {
      async function fetchExhibitsData() {
         const data = await fetchExhibits();
         setExhibits(data);
      }

      fetchExhibitsData();
   }, []);

   return (
      <Element name="exhibitions">
         <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="white"
            pt={{ xs: 5, xl: 7 }}
            pb={{ xs: 5, xl: 9 }}
         >
            <Container maxWidth="xl">
               <Stack direction="column" justifyContent="center" alignItems="center" gap={4} width="100%">
                  <SectionTitle title="Upcoming Solo Exhibitions" />

                  <Grid container spacing={4} justifyContent="center">
                     {exhibits.map((exhibit: IExhibits) => (
                        <Grid item xs={12} sm={6} md={6} key={exhibit.id}>
                           <Box
                              position="relative"
                              width="100%"
                              height={0}
                              paddingBottom="75%" // Maintain aspect ratio
                              sx={{ overflow: "hidden", borderRadius: 1 }}
                           >
                              <Box
                                 component="img"
                                 src={exhibit.image}
                                 alt={exhibit.name}
                                 sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                 }}
                              />
                              <Box
                                 position="absolute"
                                 bottom={0}
                                 left={0}
                                 right={0}
                                 sx={{
                                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                                    color: "white",
                                    padding: "12px 16px",
                                 }}
                              >
                                 <Typography fontWeight={500}>{exhibit.name}</Typography>
                              </Box>
                           </Box>
                        </Grid>
                     ))}
                  </Grid>
               </Stack>
            </Container>
         </Box>
      </Element>
   );
}

export default ExhibitionsSection;
