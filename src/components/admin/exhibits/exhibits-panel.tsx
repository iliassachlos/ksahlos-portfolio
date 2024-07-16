import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { IExhibits } from '../../../interfaces/global.interface';
import { useFirebase } from '../../../hooks/use-firebase';
import ExhibitsTable from './exhibits-table';
import { useDispatch, useSelector } from 'react-redux';
import { setAddExhibitModalOpen } from '../../../state/admin/exhibit-slice';
import { RootState } from '../../../state/store';
import AddExhibitModal from './add-exhibit-modal';
import EditExhibitModal from './edit-exhibit-modal';
import DeleteExhibitModal from './delete-exhibit-modal';
import Spinner from '../../shared/spinner';

function ExhibitsPanel() {
    const [exhibits, setExhibits] = useState<IExhibits[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const addExhibitsModalOpen: boolean = useSelector((state: RootState) => state.exhibit.addExhibitModalOpen);
    const editExhibitsModalOpen: boolean = useSelector((state: RootState) => state.exhibit.editExhibitModalOpen);
    const deleteExhibitsModalOpen: boolean = useSelector((state: RootState) => state.exhibit.deletedExhibitModalOpen);

    const { fetchExhibits } = useFirebase();
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch exhibits data
        async function fetchExhibitsData() {
            const data = await fetchExhibits();
            setExhibits(data);
            setLoading(false);
        }

        fetchExhibitsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addExhibitsModalOpen, editExhibitsModalOpen, deleteExhibitsModalOpen]);

    function addExhibitClickHandler() {
        dispatch(setAddExhibitModalOpen(true));
    }
   
    return (
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 4, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <Box mb={4}>
                <Typography variant='h5'>Photos panel</Typography>
            </Box>
            <>
                <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    sx={{ mb: 2 }}
                    onClick={() => addExhibitClickHandler()}
                >
                    Add Exhibit
                </Button>
            </>
            {/* Photos Table */}
            <Box>
                {loading && (
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Spinner />
                    </Box>
                )}
                {!loading && <ExhibitsTable exhibits={exhibits} />}
            </Box>
            {addExhibitsModalOpen && <AddExhibitModal />}
            {editExhibitsModalOpen && <EditExhibitModal />}
            {deleteExhibitsModalOpen && <DeleteExhibitModal />}
        </Box>
    );
}

export default ExhibitsPanel;
