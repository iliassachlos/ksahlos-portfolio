import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import LeafletMap from '../components/exhibits/leaflet-map';

const ExhibitsPage = () => {
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
                                <li>MYTHOS Gallery, Skala Eresos Lesvos</li>
                                <li>STONE HOUSE Gallery, Petra Lesvos</li>
                            </Stack>
                        </Box>
                    </Paper>
                </Box>
                <Box width={{ xs: '100%', md: '50%' }} height={{ xs: '80%', md: '100%' }} zIndex={10}>
                    <LeafletMap />
                </Box>
            </Stack>
        </Container>
    );
};

export default ExhibitsPage;
