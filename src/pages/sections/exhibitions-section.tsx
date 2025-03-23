import { Box, Container, Stack } from '@mui/material';
import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';
import { IExhibits } from '../../interfaces/global.interface';
import { useFirebase } from '../../hooks/use-firebase';
import ExhibitsGallery from '../../components/exhibits/exhibits-gallery';
import SectionTitle from '../../components/shared/section-title';

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
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                bgcolor='white'
                pt={{ xs: 5, xl: 7 }}
                pb={{ xs: 5, xl: 9 }}
            >
                <Container maxWidth='xl'>
                    <Stack direction='column' justifyContent='center' alignItems='center' gap={2} width='100%'>
                        <SectionTitle title='Upcoming Solo Exhibitions' />
                        <ExhibitsGallery exhibits={exhibits} />
                    </Stack>
                </Container>
            </Box>
        </Element>
    );
}

export default ExhibitionsSection;
