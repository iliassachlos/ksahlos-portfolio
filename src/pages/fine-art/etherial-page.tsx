import { Box } from '@mui/material';
import { IPhoto } from '../../interfaces/global.interface';
import Spinner from '../../components/shared/spinner';
import InfoAlert from '../../components/shared/alerts/info-alert';
import MasonryGrid from '../../components/shared/masonry-grid';
import { getDocs, query, collection, orderBy } from "firebase/firestore";
import { useQuery } from "react-query";
import { db } from "../../firebase/config";
import { STALE_TIME } from "../../utils/globals";

function EtherialPagεe() {
    const category: string = 'etherial';

    // Fetch Etherial photos
    const {
        data: photos,
        error,
        isLoading,
    } = useQuery<IPhoto[]>({
        queryKey: ['etherial-photos'],
        queryFn: async () => {
            const querySnapshot = await getDocs(query(collection(db, category), orderBy('number', 'asc')));
            const photoData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as IPhoto[];

            return photoData.filter((photo: IPhoto) => photo.visibility === true);
        },
        staleTime: STALE_TIME,
    });

    if (isLoading) {
        return (
            <Box display='flex' justifyContent='center' alignItems='center' p={2}>
                <Spinner />
            </Box>
        );
    }

    if (error) {
        return (
            <Box p={2}>
                <InfoAlert text='Error loading photos.' />
            </Box>
        );
    }

    if (photos?.length === 0) {
        return (
            <Box p={2}>
                <InfoAlert text='No photos were found' />
            </Box>
        );
    }

    return <Box p={2}>{photos && <MasonryGrid photos={photos} />}</Box>;
}

export default EtherialPagεe;
