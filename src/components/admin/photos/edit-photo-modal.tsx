import { Box, Button, Modal, Stack, Switch, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { ChangeEvent, useEffect, useState } from "react";
import InfoAlert from "../../shared/alerts/info-alert";
import Spinner from "../../shared/spinner";
import { setEditPhotoModalOpen } from "../../../state/admin/photo-slice";
import { useFirebase } from "../../../hooks/use-firebase";

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

function EditPhotoModal() {
    const [newPhotoTitle, setNewPhotoTitle] = useState<string>("");
    const [newPhotoNumber, setNewPhotoNumber] = useState<number>(0);
    const [newPhotoVisibility, setNewPhotoVisibility] = useState<boolean>(false);
    const [newPhotoFile, setNewPhotoFile] = useState<File | null>(null);

    const [loading, setLoading] = useState<boolean>(false);
    const [photoEdited, setPhotoEdited] = useState<boolean>(false);

    const selectedPhoto = useSelector((state: RootState) => state.photo.selectedPhoto);
    const selectedPhotoCategory = useSelector((state: RootState) => state.photo.selectedPhotoCategory);
    const editPhotoModal: boolean = useSelector((state: RootState) => state.photo.editPhotoModalOpen);

    const dispatch = useDispatch();
    const {editPhoto} = useFirebase()

    useEffect(() => {
        if (
            selectedPhoto &&
            selectedPhoto.title !== null &&
            selectedPhoto.number !== null &&
            selectedPhoto.url !== null
        ) {
            setNewPhotoTitle(selectedPhoto.title);
            setNewPhotoNumber(selectedPhoto.number);
            setNewPhotoVisibility(selectedPhoto.visibility);
        }
    }, [selectedPhoto]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setNewPhotoFile(event.target.files[0]);
        }
    };

    async function editPhotoHandler() {
        try {
            setLoading(true);
            if (selectedPhoto && selectedPhoto.id && newPhotoTitle && selectedPhotoCategory && newPhotoNumber) {
                await editPhoto(
                    selectedPhotoCategory,
                    selectedPhoto.id,
                    newPhotoTitle,
                    newPhotoNumber,
                    newPhotoFile, // Include the new file if selected
                    newPhotoVisibility
                );
                setPhotoEdited(true);
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
                open={editPhotoModal}
                onClose={() => dispatch(setEditPhotoModalOpen(false))}
                aria-labelledby="edit-photo-modal"
                aria-describedby="edit-photo-modal"
            >
                <Box sx={style} display="flex" justifyContent="center" alignItems="center">
                    {loading && <Spinner />}
                    {!loading && (
                        <Stack width="100%" spacing={2}>
                            <Typography variant="h5">Edit Photo</Typography>
                            {photoEdited && <InfoAlert text="Photo was edited successfully" />}
                            <TextField
                                type="text"
                                label="Title"
                                fullWidth
                                value={newPhotoTitle}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPhotoTitle(e.target.value)}
                            />
                            <TextField
                                type="number"
                                label="Number"
                                fullWidth
                                value={newPhotoNumber}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setNewPhotoNumber(Number(e.target.value))
                                }
                            />
                            <TextField
                                type="file"
                                fullWidth
                                onChange={handleFileChange}
                            />
                            <Stack direction="row" alignItems="center">
                                <Typography>Off</Typography>
                                <Switch
                                    checked={newPhotoVisibility}
                                    onChange={() => setNewPhotoVisibility(!newPhotoVisibility)}
                                />
                                <Typography>On</Typography>
                            </Stack>

                            <Button variant="contained" color="primary" onClick={() => editPhotoHandler()}>
                                Submit
                            </Button>
                        </Stack>
                    )}
                </Box>
            </Modal>
        </Box>
    );
}

export default EditPhotoModal;
