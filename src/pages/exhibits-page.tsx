import { Box, Chip, Container, Icon, IconButton, Paper, Stack, Typography } from "@mui/material";
import "leaflet/dist/leaflet.css";
import LeafletMap from "../components/exhibits/leaflet-map";
import { useState, useEffect } from "react";
import { IExhibits } from "../interfaces/global.interface";
import { useFirebase } from "../hooks/use-firebase";
import RoomIcon from "@mui/icons-material/Room";
import { green } from "@mui/material/colors";

const ExhibitsPage = () => {
    const [exhibits, setExhibits] = useState<IExhibits[]>([]);

    const { fetchExhibits } = useFirebase();

    useEffect(() => {
        // Fetch exhibits data
        async function fetchExhibitsData() {
            const data = await fetchExhibits();
            setExhibits(data);
        }

        fetchExhibitsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container maxWidth="xl">
            <Stack
                direction={{ xs: "column", md: "row" }}
                height="90vh"
                pt={2}
                pb={6}
                spacing={{ xs: 4, md: 0 }}
                gap={2}
                display={{sm: 'block', lg: 'flex'}}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Box
                    width={{ xs: "100%", md: "50%" }}
                    height={{ md: "100%", xl: "60%" }}
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="true"
                >
                    <Paper elevation={2} sx={{ height: "100%" }}>
                        <Box p={2} height="100%">
                            <Typography variant="h4" component="h1" textAlign="center" fontWeight={500} mb={4}>
                                Current Exhibitions
                            </Typography>
                            <Stack spacing={1}>
                                {exhibits.map((exhibit) => (
                                    <Box
                                        key={exhibit.id}
                                        textAlign="left"
                                        display="flex"
                                        alignItems="center"
                                        borderRadius={2}
                                        p={1}
                                    >
                                        <IconButton size="small" color="primary" disableRipple>
                                            <RoomIcon />
                                        </IconButton>
                                        <Typography>{exhibit.name}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </Paper>
                </Box>
                <Box
                    width={{ xs: "100%", md: "50%" }}
                    height={{ xs: "80%", md: "100%", xl: "60%" }}
                    zIndex={10}
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="true"
                >
                    <LeafletMap exhibits={exhibits} />
                </Box>
            </Stack>
        </Container>
    );
};

export default ExhibitsPage;
