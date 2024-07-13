import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useState } from "react";
import { useFirebase } from "../../../hooks/use-firebase";
import Spinner from "../../shared/spinner";
import { IPhoto } from "../../../interfaces/global.interface";
import { setVisibilityPhotoModalOpen } from "../../../state/admin/photo-slice";

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

function VisibilityPhotoModal() {
    const [loading, setLoading] = useState<boolean>(false);

    const visibilityPhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.visibilityModalOpen);
    const selectedPhoto: IPhoto | null = useSelector((state: RootState) => state.photo.selectedPhoto);
    const selectedPhotoCategory: string | null = useSelector((state: RootState) => state.photo.selectedPhotoCategory);

    const dispatch = useDispatch();
    const { changePhotoVisibility } = useFirebase();

    function visibilityPhotoHandler() {
        try {
            if (selectedPhoto && selectedPhoto?.id && selectedPhotoCategory) {
                setLoading(true);
                changePhotoVisibility(selectedPhotoCategory, selectedPhoto.id, !selectedPhoto.visibility);
                dispatch(setVisibilityPhotoModalOpen(false));
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    console.log(selectedPhoto?.visibility);

    return (
        <Box>
            <Modal
                open={visibilityPhotoModalOpen}
                onClose={() => dispatch(setVisibilityPhotoModalOpen(false))}
                aria-labelledby="visibility-photo-modal"
                aria-describedby="visibility-photo-modal"
            >
                <Box sx={style} display="flex" justifyContent="center" alignItems="center">
                    {loading && <Spinner />}
                    {!loading && (
                        <Stack width="100%" spacing={2}>
                            <Typography variant="h5">
                                {selectedPhoto?.visibility && "Are you sure you want to hide this photo?"}
                                {!selectedPhoto?.visibility && "Are you sure you want to show this photo?"}
                            </Typography>
                            <Button variant="contained" color="error" onClick={visibilityPhotoHandler}>
                                {selectedPhoto?.visibility ? "Hide" : "Show"} Photo
                            </Button>
                        </Stack>
                    )}
                </Box>
            </Modal>
        </Box>
    );
}

export default VisibilityPhotoModal;
