import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { setEditExhibitModalOpen } from '../../../state/admin/exhibit-slice';
import { ChangeEvent, useEffect, useState } from 'react';
import { useFirebase } from '../../../hooks/use-firebase';
import InfoAlert from '../../shared/alerts/info-alert';
import Spinner from '../../shared/spinner';

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

function EditExhibitModal() {
    const [newExhibitionName, setNewExhibitionName] = useState<string>('');
    const [newExhibitionLongitude, setNewExhibitionLongitude] = useState<number>(0);
    const [newExhibitionLatitude, setNewExhibitionLatitude] = useState<number>(0);

    const [loading, setLoading] = useState<boolean>(false);
    const [exhibitEdited, setExhibitEdited] = useState<boolean>(false);

    const selectedExhibit = useSelector((state: RootState) => state.exhibit.selectedExhibit);
    const editExhibitModal: boolean = useSelector((state: RootState) => state.exhibit.editExhibitModalOpen);

    const { editExhibition } = useFirebase();
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            selectedExhibit &&
            selectedExhibit.name !== null &&
            selectedExhibit.coordinates[0] !== null &&
            selectedExhibit.coordinates[1] !== null
        ) {
            setNewExhibitionName(selectedExhibit.name);
            setNewExhibitionLongitude(selectedExhibit.coordinates[0]);
            setNewExhibitionLatitude(selectedExhibit.coordinates[1]);
        }
    }, [selectedExhibit]);

    async function editExhibitionHandler() {
        try {
            setLoading(true);
            if (
                selectedExhibit &&
                selectedExhibit.id &&
                newExhibitionName &&
                newExhibitionLongitude &&
                newExhibitionLatitude
            ) {
                await editExhibition(
                    selectedExhibit.id,
                    newExhibitionName,
                    newExhibitionLongitude,
                    newExhibitionLatitude
                );
            }
        } catch (error) {
            console.log(error);
        } finally {
            setExhibitEdited(true);
            setLoading(false);
        }
    }

    return (
        <Box>
            <Modal
                open={editExhibitModal}
                onClose={() => dispatch(setEditExhibitModalOpen(false))}
                aria-labelledby='add-exhibition-modal'
                aria-describedby='add-exhibition-modal'
            >
                <Box sx={style} display='flex' justifyContent='center' alignItems='center'>
                    {loading && <Spinner />}
                    {!loading && (
                        <Stack width='100%' spacing={2}>
                            <Typography variant='h5'> Exhibition</Typography>
                            {exhibitEdited && <InfoAlert text='Exhibition was edited successfully' />}
                            <TextField
                                type='text'
                                label='Name'
                                fullWidth
                                value={newExhibitionName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewExhibitionName(e.target.value)}
                            />
                            <Stack direction='row' gap={2}>
                                <TextField
                                    type='number'
                                    label='Longitude'
                                    fullWidth
                                    value={newExhibitionLongitude}
                                    onChange={(e) => setNewExhibitionLongitude(Number(e.target.value))}
                                />
                                <TextField
                                    type='number'
                                    label='Latitude'
                                    fullWidth
                                    value={newExhibitionLatitude}
                                    onChange={(e) => setNewExhibitionLatitude(Number(e.target.value))}
                                />
                            </Stack>
                            <Button variant='contained' color='primary' onClick={editExhibitionHandler}>
                                Submit New Exhibition
                            </Button>
                        </Stack>
                    )}
                </Box>
            </Modal>
        </Box>
    );
}

export default EditExhibitModal;
