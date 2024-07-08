import { Box, Button, InputLabel, Modal, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { setAddExhibitModalOpen, setDeleteExhibitModalOpen } from '../../../state/admin/exhibit-slice';
import { ChangeEvent, useState } from 'react';
import { useFirebase } from '../../../hooks/use-firebase';
import InfoAlert from '../../shared/alerts/info-alert';
import Spinner from '../../shared/spinner';
import { IExhibits } from '../../../interfaces/global.interface';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '4px',
    boxShadow: 24,
    p: 4,
};

function DeleteExhibitModal() {
    const [loading, setLoading] = useState<boolean>(false);

    const deleteExhibitModalOpen: boolean = useSelector((state: RootState) => state.exhibit.deletedExhibitModalOpen);
    const selectedExhibit: IExhibits | null = useSelector((state: RootState) => state.exhibit.selectedExhibit);

    const dispatch = useDispatch();
    const { deleteExhibition } = useFirebase();

    function deleteExhibitionHandler() {
        try {
            if (selectedExhibit && selectedExhibit?.id) {
                setLoading(true);
                deleteExhibition(selectedExhibit?.id);
                dispatch(setDeleteExhibitModalOpen(false));
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Box>
            <Modal
                open={deleteExhibitModalOpen}
                onClose={() => dispatch(setDeleteExhibitModalOpen(false))}
                aria-labelledby='delete-exhibition-modal'
                aria-describedby='delete-exhibition-modal'
            >
                <Box sx={style} display='flex' justifyContent='center' alignItems='center'>
                    {loading && <Spinner />}
                    {!loading && (
                        <Stack width='100%' spacing={2}>
                            <Typography variant='h5'>Are you sure you want to delete this exhibition?</Typography>
                            <Button variant='contained' color='error' onClick={deleteExhibitionHandler}>
                                Delete Exhibition
                            </Button>
                        </Stack>
                    )}
                </Box>
            </Modal>
        </Box>
    );
}

export default DeleteExhibitModal;
