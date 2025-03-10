import { Box, Container, Stack, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';
import { IExhibits } from '../../interfaces/global.interface';
import { useFirebase } from '../../hooks/use-firebase';
import ExhibitsGallery from '../../components/exhibits/exhibits-gallery';

function ExhibitionsSection() {
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
        <Element name='exhibitions'>
            <Container maxWidth='xl'>
                <Box display='flex' alignItems='center' justifyContent='center' my={2}>
                    <Stack direction='column' justifyContent='center' alignItems='center' gap={2} width='100%'>
                        <Typography variant='h1' fontSize={28} fontWeight={600}>
                            Upcoming Exhibitions
                        </Typography>
                        <ExhibitsGallery exhibits={exhibits} />
                    </Stack>
                </Box>
            </Container>
        </Element>
    );
}

export default ExhibitionsSection;
