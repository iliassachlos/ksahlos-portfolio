import { Box, Button, InputLabel, Modal, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { setAddExhibitModalOpen } from '../../../state/admin/exhibit-slice';
import { ChangeEvent, useState } from 'react';
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

function AddExhibitModal() {
    const [newExhibitionName, setNewExhibitionName] = useState<string>('');
    const [newExhibitionLongitude, setNewExhibitionLongitude] = useState<number>(0);
    const [newExhibitionLatitude, setNewExhibitionLatitude] = useState<number>(0);

    const [loading, setLoading] = useState<boolean>(false);
    const [exhibitAdded, setExhibitAdded] = useState<boolean>(false);
    const [addedExhibitName, setAddedExhibitName] = useState<string>('');

    const addExhibitModalOpen: boolean = useSelector((state: RootState) => state.exhibit.addExhibitModalOpen);
    const dispatch = useDispatch();
    const { addExhibition } = useFirebase();

    async function addExhibitionHandler() {
        try {
            setLoading(true);
            await addExhibition(newExhibitionName, newExhibitionLongitude, newExhibitionLatitude);
        } catch (error) {
            console.log(error);
        } finally {
            setExhibitAdded(true);
            setAddedExhibitName(newExhibitionName);
            clearFields();
            setLoading(false);
        }
    }

    function clearFields() {
        setNewExhibitionName('');
        setNewExhibitionLongitude(0);
        setNewExhibitionLatitude(0);
    }

    return (
        <Box>
            <Modal
                open={addExhibitModalOpen}
                onClose={() => dispatch(setAddExhibitModalOpen(false))}
                aria-labelledby='add-exhibition-modal'
                aria-describedby='add-exhibition-modal'
            >
                <Box sx={style} display='flex' justifyContent='center' alignItems='center'>
                    {loading && <Spinner />}
                    {!loading && (
                        <Stack width='100%' spacing={2}>
                            <Typography variant='h5'>Add New Exhibition</Typography>
                            {exhibitAdded && (
                                <InfoAlert text={'Exhibition with name: ' + addedExhibitName + ' was added'} />
                            )}
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
                            <Button variant='contained' color='primary' onClick={addExhibitionHandler}>
                                Add Exhibition
                            </Button>
                        </Stack>
                    )}
                </Box>
            </Modal>
        </Box>
    );
}

export default AddExhibitModal;
