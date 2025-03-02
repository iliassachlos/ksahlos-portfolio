import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { useState } from 'react';
import { useFirebase } from '../../../hooks/use-firebase';
import Spinner from '../../shared/spinner';
import { IPhoto } from '../../../interfaces/global.interface';
import { setDeletePhotoModalOpen } from '../../../state/admin/photo-slice';

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

function DeletePhotoModal() {
    const [loading, setLoading] = useState<boolean>(false);

    const deletePhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.deletePhotoModalOpen);
    const selectedPhoto: IPhoto | null = useSelector((state: RootState) => state.photo.selectedPhoto);
    const selectedPhotoCategory: string | null = useSelector((state: RootState) => state.photo.selectedPhotoCategory);

    const dispatch = useDispatch();
    const { deletePhoto } = useFirebase();

    function deletePhotoHandler() {
        try {
            if (selectedPhoto && selectedPhoto?.id && selectedPhotoCategory) {
                setLoading(true);
                deletePhoto(selectedPhoto.title, selectedPhoto.id, selectedPhotoCategory);
                dispatch(setDeletePhotoModalOpen(false));
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
                open={deletePhotoModalOpen}
                onClose={() => dispatch(setDeletePhotoModalOpen(false))}
                aria-labelledby='delete-photo-modal'
                aria-describedby='delete-photo-modal'
            >
                <Box sx={style} display='flex' justifyContent='center' alignItems='center'>
                    {loading && <Spinner />}
                    {!loading && (
                        <Stack width='100%' spacing={2}>
                            <Typography variant='h5'>Are you sure you want to delete this photo?</Typography>
                            <Button variant='contained' color='error' onClick={deletePhotoHandler}>
                                Delete Photo
                            </Button>
                        </Stack>
                    )}
                </Box>
            </Modal>
        </Box>
    );
}

export default DeletePhotoModal;
