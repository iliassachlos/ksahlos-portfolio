import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { IPhoto } from '../../interfaces/global.interface';
import { useFirebase } from '../../hooks/use-firebase';
import Spinner from '../../components/shared/spinner';
import InfoAlert from '../../components/shared/alerts/info-alert';
import MasonryGrid from '../../components/shared/masonry-grid';

function EtherialPagεe() {
    const [photos, setPhotos] = useState<IPhoto[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { fetchPhotos } = useFirebase();

    const category: string = 'etherial';

    useEffect(() => {
        fetchEtherialPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchEtherialPhotos() {
        const data = await fetchPhotos(category);
        const filteredData = data.filter((photo) => photo.visibility === true);
        setPhotos(filteredData);
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

export default EtherialPagεe;
