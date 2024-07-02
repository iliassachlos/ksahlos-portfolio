import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { IPhoto } from '../../interfaces/global.interface';
import { useFirebase } from '../../utils/use-firebase';
import Spinner from '../../components/shared/spinner';
import InfoAlert from '../../components/shared/alerts/info-alert';
import MasonryGrid from '../../components/shared/masonry-grid';

function IllusionPage() {
    const [photos, setPhotos] = useState<IPhoto[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { fetchData } = useFirebase();

    const category: string = 'fine-art';
    const subCategory: string = 'illusion';

    useEffect(() => {
        fetchIllusionPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchIllusionPhotos() {
        const data = await fetchData(category, subCategory);
        setPhotos(data);
        setIsLoading(false);
    }

    return (
        <Container maxWidth='xl'>
            <Box p={2}>
                {isLoading && (
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Spinner />
                    </Box>
                )}
                {!isLoading && photos.length === 0 && <InfoAlert text='No photos were found' />}
                {!isLoading && photos.length > 0 && <MasonryGrid photos={photos} />}
            </Box>
        </Container>
    );
}

export default IllusionPage;