import {
    Box,
    Button,
    Input,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    Stack,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { ChangeEvent, useState } from 'react';
import InfoAlert from '../../shared/alerts/info-alert';
import Spinner from '../../shared/spinner';
import { setAddPhotoModalOpen } from '../../../state/admin/photo-slice';
import ErrorAlert from '../../shared/alerts/error-alert';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { getDownloadURL, getStorage, ref, uploadBytes } from '@firebase/storage';
import { PhotoCategoryEnum } from '../../../interfaces/global.enum';
import { v4 as uuidv4 } from 'uuid';

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

function AddPhotoModal() {
    // Photo fields
    const [newPhotoTitle, setNewPhotoTitle] = useState<string>('');
    const [newPhotoDescription, setNewPhotoDescription] = useState<string>('');
    const [newPhotoNumber, setNewPhotoNumber] = useState<number>(0);
    const [newPhotoVisibility, setNewPhotoVisibility] = useState<boolean>(false);
    const [newPhotoFile, setNewPhotoFile] = useState<File | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<PhotoCategoryEnum>(PhotoCategoryEnum.MINIMALIST);

    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [photoAdded, setPhotoAdded] = useState<boolean>(false);
    const [addedPhotoTitle, setAddedPhotoTitle] = useState<string>('');

    const addPhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.addPhotoModalOpen);
    const dispatch = useDispatch();

    const storage = getStorage();

    async function addPhotoHandler() {
        setLoading(true);

        if (newPhotoFile === null) {
            setErrorMessage('Please select a photo to upload');
            setLoading(false); // stop loading if there's an error
            return;
        }
        try {
            const newPhotoUuid: string = uuidv4();

            // Save new photo to firebase storage
            const storageRef = ref(storage, `${selectedCategory}/${newPhotoUuid}`);
            await uploadBytes(storageRef, newPhotoFile);
            const newPhotoUrl = await getDownloadURL(storageRef);

            //Create photo object
            const newPhoto = {
                title: newPhotoTitle,
                desc: newPhotoDescription,
                number: newPhotoNumber,
                url: newPhotoUrl,
                visibility: newPhotoVisibility,
            };

            //Save photo to firebase database
            await setDoc(doc(db, selectedCategory, newPhotoUuid), newPhoto);
        } catch (error) {
            console.error('Error adding document: ', error);
            setErrorMessage('Failed to add photo. Please try again.');
        } finally {
            setPhotoAdded(true);
            setAddedPhotoTitle(newPhotoTitle);
            setLoading(false);
            clearFields();
        }
    }

    function clearFields() {
        setNewPhotoTitle('');
        setNewPhotoDescription('');
        setNewPhotoNumber(0);
        setNewPhotoVisibility(false);
        setNewPhotoFile(null);
    }

    function selectedCategoryHandler(e: any) {
        switch (e.target.value) {
            case PhotoCategoryEnum.MINIMALIST:
                setSelectedCategory(PhotoCategoryEnum.MINIMALIST);
                break;
            case PhotoCategoryEnum.ABSTRACT:
                setSelectedCategory(PhotoCategoryEnum.ABSTRACT);
                break;
            case PhotoCategoryEnum.LOCAL_ART:
                setSelectedCategory(PhotoCategoryEnum.LOCAL_ART);
                break;
            case PhotoCategoryEnum.BLACK_AND_WHITE:
                setSelectedCategory(PhotoCategoryEnum.BLACK_AND_WHITE);
                break;
            case PhotoCategoryEnum.CONTEMPORARY:
                setSelectedCategory(PhotoCategoryEnum.CONTEMPORARY);
                break;
            case PhotoCategoryEnum.IMPRESSIONISM:
                setSelectedCategory(PhotoCategoryEnum.IMPRESSIONISM);
                break;
            case PhotoCategoryEnum.SEASCAPE:
                setSelectedCategory(PhotoCategoryEnum.SEASCAPE);
                break;
            case PhotoCategoryEnum.SURREALISM:
                setSelectedCategory(PhotoCategoryEnum.SURREALISM);
                break;
            case PhotoCategoryEnum.WILDLIFE:
                setSelectedCategory(PhotoCategoryEnum.WILDLIFE);
                break;
            default:
                setSelectedCategory(PhotoCategoryEnum.MINIMALIST);
                break;
        }
    }

    return (
        <Box>
            <Modal
                open={addPhotoModalOpen}
                onClose={() => dispatch(setAddPhotoModalOpen(false))}
                aria-labelledby='add-photo-modal'
                aria-describedby='add-photo-modal'
            >
                <Box sx={style} display='flex' justifyContent='center' alignItems='center'>
                    {loading && <Spinner />}
                    {!loading && (
                        <Stack width='100%' spacing={2}>
                            <Typography variant='h5'>Add New Photo</Typography>
                            {errorMessage && <ErrorAlert text={errorMessage} />}
                            {photoAdded && <InfoAlert text={'Photo with name: ' + addedPhotoTitle + ' was added'} />}
                            <TextField
                                type='text'
                                label='Title'
                                fullWidth
                                value={newPhotoTitle}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPhotoTitle(e.target.value)}
                            />
                            <TextField
                                type='text'
                                label='Desciption'
                                fullWidth
                                value={newPhotoDescription}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPhotoDescription(e.target.value)}
                            />
                            <Stack direction='row' gap={2}>
                                <TextField
                                    type='number'
                                    label='Number'
                                    fullWidth
                                    value={newPhotoNumber}
                                    onChange={(e) => setNewPhotoNumber(Math.max(0, Number(e.target.value)))}
                                />
                                <Select
                                    value={selectedCategory}
                                    label='Category'
                                    onChange={(e) => selectedCategoryHandler(e)}
                                    fullWidth
                                >
                                    <MenuItem value={PhotoCategoryEnum.MINIMALIST}>Minimalist</MenuItem>
                                    <MenuItem value={PhotoCategoryEnum.ABSTRACT}>Abstract</MenuItem>
                                    <MenuItem value={PhotoCategoryEnum.LOCAL_ART}>Local</MenuItem>
                                    <MenuItem value={PhotoCategoryEnum.BLACK_AND_WHITE}>Black And White</MenuItem>
                                    <MenuItem value={PhotoCategoryEnum.CONTEMPORARY}>Contemporary</MenuItem>
                                    <MenuItem value={PhotoCategoryEnum.IMPRESSIONISM}>Impressionism</MenuItem>
                                    <MenuItem value={PhotoCategoryEnum.SEASCAPE}>Seascape</MenuItem>
                                    <MenuItem value={PhotoCategoryEnum.SURREALISM}>Surrealism</MenuItem>
                                    <MenuItem value={PhotoCategoryEnum.WILDLIFE}>Wildlife</MenuItem>
                                </Select>
                            </Stack>

                            <Stack direction='row'>
                                <Box display='flex' flexDirection='column'>
                                    <InputLabel>Visibility</InputLabel>
                                    <Stack direction='row' alignItems='center'>
                                        <Typography>Off</Typography>
                                        <Switch onChange={() => setNewPhotoVisibility(!newPhotoVisibility)} />
                                        <Typography>On</Typography>
                                    </Stack>
                                </Box>

                                <Box display='flex' flexDirection='column'>
                                    <br />
                                    <Stack direction='row' alignItems='center' ml={8}>
                                        <Input
                                            type='file'
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                setNewPhotoFile(e.target.files![0])
                                            }
                                        />
                                    </Stack>
                                </Box>
                            </Stack>
                            <Button variant='contained' color='primary' onClick={() => addPhotoHandler()}>
                                Add Photo
                            </Button>
                        </Stack>
                    )}
                </Box>
            </Modal>
        </Box>
    );
}

export default AddPhotoModal;
