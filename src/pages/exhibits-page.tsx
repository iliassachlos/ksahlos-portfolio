import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import LeafletMap from '../components/exhibits/leaflet-map';
import { useState, useEffect } from 'react';
import { IExhibits } from '../interfaces/global.interface';
import { useFirebase } from '../hooks/use-firebase';

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
        <Container maxWidth='xl'>
            <Stack direction={{ xs: 'column', md: 'row' }} height='90vh' py={2} spacing={{ xs: 4, md: 0 }} gap={2}>
                <Box width={{ xs: '100%', md: '50%' }} height={{ md: '100%' }}>
                    <Paper elevation={2} sx={{ height: '100%' }}>
                        <Box p={2} height='100%'>
                            <Typography variant='h4' component='h1' textAlign='center' fontWeight={500} mb={4}>
                                Current Exhibitions
                            </Typography>
                            <Stack spacing={1}>
                                {exhibits.map((exhibit) => (
                                    <li key={exhibit.id}>{exhibit.name}</li>
                                ))}
                            </Stack>
                        </Box>
                    </Paper>
                </Box>
                <Box width={{ xs: '100%', md: '50%' }} height={{ xs: '80%', md: '100%' }} zIndex={10}>
                    <LeafletMap exhibits={exhibits} />
                </Box>
            </Stack>
        </Container>
    );
};

export default ExhibitsPage;
