import { Box, Button, MenuItem, Select, Typography, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { IPhoto } from "../../../interfaces/global.interface";
import { useFirebase } from "../../../hooks/use-firebase";
import PhotosTable from "./photos-table";
import Spinner from "../../shared/spinner";
import { useDispatch, useSelector } from "react-redux";
import { setAddPhotoModalOpen, setSelectedPhotoCategory } from "../../../state/admin/photo-slice";
import { RootState } from "../../../state/store";
import AddPhotoModal from "./add-photo-modal";
import EditPhotoModal from "./edit-photo-modal";
import DeletePhotoModal from "./delete-photo-modal";
import VisibilityPhotoModal from "./visibility-photo-modal";

function PhotosPanel() {
    const [selectedCategory, setSelectedCategory] = useState<string>("escape");
    const [loading, setLoading] = useState<boolean>(true);
    const [photos, setPhotos] = useState<IPhoto[]>([]);

    // Action Modals
    const addPhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.addPhotoModalOpen);
    const editPhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.editPhotoModalOpen);
    const deletePhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.deletePhotoModalOpen);
    const visibilityPhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.visibilityModalOpen);

    const { fetchPhotos } = useFirebase();
    const dispatch = useDispatch();

    // Set selectedCategory redux state when component renders or category changes
    useEffect(() => {
        if (selectedCategory.length > 0) {
            dispatch(setSelectedPhotoCategory(selectedCategory));
        }
    }, [selectedCategory, dispatch]);

    // Fetch photos when component renders or category/modals change
    useEffect(() => {
        async function fetchCategoryPhotos() {
            setLoading(true);
            const categoryPhotos = await fetchPhotos(selectedCategory);
            setPhotos(categoryPhotos);
            setLoading(false);
        }

        fetchCategoryPhotos();
    }, [selectedCategory]);

    function addPhotoClickHandler() {
        dispatch(setAddPhotoModalOpen(true));
    }

    function selectedCategoryHandler(e: SelectChangeEvent<string>) {
        setSelectedCategory(e.target.value);
    }

    return (
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2, boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
            <Box mb={4}>
                <Typography variant="h5">Photos panel</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box mb={2}>
                    <Select
                        value={selectedCategory}
                        label="Category"
                        onChange={selectedCategoryHandler}
                        sx={{ width: 250 }}
                    >
                        <MenuItem value="escape">Escape</MenuItem>
                        <MenuItem value="essential">Essential</MenuItem>
                        <MenuItem value="etherial">Etherial</MenuItem>
                        <MenuItem value="illusion">Illusion</MenuItem>
                        <MenuItem value="local-art">Local Art</MenuItem>
                    </Select>
                </Box>
                <Box>
                    <Button variant="contained" color="primary" size="large" onClick={addPhotoClickHandler}>
                        Add Photo
                    </Button>
                </Box>
            </Box>
            {/* Photos Table */}
            <Box>
                {loading && (
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Spinner />
                    </Box>
                )}
                {!loading && <PhotosTable photos={photos} />}
            </Box>
            {addPhotoModalOpen && <AddPhotoModal />}
            {editPhotoModalOpen && <EditPhotoModal />}
            {deletePhotoModalOpen && <DeletePhotoModal />}
            {visibilityPhotoModalOpen && <VisibilityPhotoModal />}
        </Box>
    );
}

export default PhotosPanel;
