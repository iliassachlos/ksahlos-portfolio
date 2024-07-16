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
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { ChangeEvent, useState } from "react";
import { useFirebase } from "../../../hooks/use-firebase";
import InfoAlert from "../../shared/alerts/info-alert";
import Spinner from "../../shared/spinner";
import { setAddPhotoModalOpen } from "../../../state/admin/photo-slice";
import ErrorAlert from "../../shared/alerts/error-alert";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { getDownloadURL, getStorage, ref, uploadBytes } from "@firebase/storage";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    p: 4,
};

function AddPhotoModal() {
    // Photo fields
    const [newPhotoTitle, setNewPhotoTitle] = useState<string>("");
    const [newPhotoNumber, setNewPhotoNumber] = useState<number>(0);
    const [newPhotoVisibility, setNewPhotoVisibility] = useState<boolean>(false);
    const [newPhotoFile, setNewPhotoFile] = useState<File | null>(null);

    const [selectedCategory, setSelectedCategory] = useState<
        "escape" | "essential" | "etherial" | "illusion" | "local-art"
    >("escape");

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [photoAdded, setPhotoAdded] = useState<boolean>(false);
    const [addedPhotoTitle, setAddedPhotoTitle] = useState<string>("");

    const addPhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.addPhotoModalOpen);
    const dispatch = useDispatch();

    const storage = getStorage();

    async function addPhotoHandler() {
        setLoading(true);

        if (newPhotoFile === null) {
            setErrorMessage("Please select a photo to upload");
            setLoading(false); // stop loading if there's an error
            return;
        }
        try {
            // Save new photo to firebase storage
            const storageRef = ref(storage, `${selectedCategory}/${newPhotoTitle}`);
            await uploadBytes(storageRef, newPhotoFile);
            const newPhotoUrl = await getDownloadURL(storageRef);

            //Create photo object
            const newPhoto = {
                title: newPhotoTitle,
                number: newPhotoNumber,
                url: newPhotoUrl,
                visibility: newPhotoVisibility,
            };

            //Save photo to firebase database
            await addDoc(collection(db, selectedCategory), newPhoto);
        } catch (error) {
            console.error("Error adding document: ", error);
            setErrorMessage("Failed to add photo. Please try again.");
        } finally {
            setPhotoAdded(true);
            setAddedPhotoTitle(newPhotoTitle);
            setLoading(false);
            clearFields();
        }
    }

    function clearFields() {
        setNewPhotoTitle("");
        setNewPhotoNumber(0);
        setNewPhotoVisibility(false);
        setNewPhotoFile(null);
    }

    function selectedCategoryHandler(e: any) {
        switch (e.target.value) {
            case "essential":
                setSelectedCategory("essential");
                break;
            case "escape":
                setSelectedCategory("escape");
                break;
            case "etherial":
                setSelectedCategory("etherial");
                break;
            case "illusion":
                setSelectedCategory("illusion");
                break;
            case "local-art":
                setSelectedCategory("local-art");
                break;
            default:
                setSelectedCategory("escape");
                break;
        }
    }

    return (
        <Box>
            <Modal
                open={addPhotoModalOpen}
                onClose={() => dispatch(setAddPhotoModalOpen(false))}
                aria-labelledby="add-photo-modal"
                aria-describedby="add-photo-modal"
            >
                <Box sx={style} display="flex" justifyContent="center" alignItems="center">
                    {loading && <Spinner />}
                    {!loading && (
                        <Stack width="100%" spacing={2}>
                            <Typography variant="h5">Add New Photo</Typography>
                            {errorMessage && <ErrorAlert text={errorMessage} />}
                            {photoAdded && <InfoAlert text={"Photo with name: " + addedPhotoTitle + " was added"} />}
                            <TextField
                                type="text"
                                label="Title"
                                fullWidth
                                value={newPhotoTitle}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPhotoTitle(e.target.value)}
                            />
                            <Stack direction="row" gap={2}>
                                <TextField
                                    type="number"
                                    label="Number"
                                    fullWidth
                                    value={newPhotoNumber}
                                    onChange={(e) => setNewPhotoNumber(Math.max(0, Number(e.target.value)))}
                                />
                                <Select
                                    value={selectedCategory}
                                    label="Category"
                                    onChange={(e) => selectedCategoryHandler(e)}
                                    fullWidth
                                >
                                    <MenuItem value="escape">Escape</MenuItem>
                                    <MenuItem value="essential">Essential</MenuItem>
                                    <MenuItem value="etherial">Etherial</MenuItem>
                                    <MenuItem value="illusion">Illusion</MenuItem>
                                    <MenuItem value="local-art">Local Art</MenuItem>
                                </Select>
                            </Stack>

                            <Stack direction="row">
                                <Box display="flex" flexDirection="column">
                                    <InputLabel>Visibility</InputLabel>
                                    <Stack direction="row" alignItems="center">
                                        <Typography>Off</Typography>
                                        <Switch onChange={() => setNewPhotoVisibility(!newPhotoVisibility)} />
                                        <Typography>On</Typography>
                                    </Stack>
                                </Box>

                                <Box display="flex" flexDirection="column">
                                    <br />
                                    <Stack direction="row" alignItems="center" ml={8}>
                                        <Input
                                            type="file"
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                setNewPhotoFile(e.target.files![0])
                                            }
                                        />
                                    </Stack>
                                </Box>
                            </Stack>
                            <Button variant="contained" color="primary" onClick={() => addPhotoHandler()}>
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
