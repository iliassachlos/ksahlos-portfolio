import { db } from "../firebase/config";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { IDocData, IExhibits, IExhibitsData, IPhoto } from "../interfaces/global.interface";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "@firebase/storage";

export function useFirebase() {
    // Fetch photos according to category and subcategory
    async function fetchPhotos(category: string): Promise<IPhoto[]> {
        try {
            const querySnapshot = await getDocs(query(collection(db, category), orderBy("number", "asc")));
            return querySnapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as IDocData) }));
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Fetch exhibits
    async function fetchExhibits(): Promise<IExhibits[]> {
        try {
            const querySnapshot = await getDocs(query(collection(db, "exhibits")));
            return querySnapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as IExhibitsData) }));
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async function addExhibition(
        newExhibitionName: string,
        newExhibitionLongitude: number,
        newExhibitionLatitude: number
    ) {
        const newExhibition = {
            name: newExhibitionName,
            coordinates: [newExhibitionLongitude, newExhibitionLatitude],
        };

        // Add the new exhibition document to the "exhibits" collection
        addDoc(collection(db, "exhibits"), newExhibition)
            .then(() => {
                // Document added successfully
                console.log("Exhibition added successfully");
            })
            .catch((error) => {
                // Error occurred while adding the document
                console.error("Error adding exhibition:", error);
            });
    }

    async function editExhibition(
        exhibitionId: string,
        newExhibitionName: string,
        newExhibitionLongitude: number,
        newExhibitionLatitude: number
    ) {
        try {
            const editedExhibition = {
                name: newExhibitionName,
                coordinates: [newExhibitionLongitude, newExhibitionLatitude],
            };
            await updateDoc(doc(db, "exhibits", exhibitionId), editedExhibition);
            console.log("Exhibition updated successfully");
        } catch (error) {
            console.error("Error updating exhibition:", error);
        }
    }

    async function deleteExhibition(exhibitionId: string) {
        try {
            await deleteDoc(doc(db, "exhibits", exhibitionId));
            console.log("Exhibition deleted successfully");
        } catch (error) {
            console.error("Error deleting exhibition:", error);
        }
    }

    async function addPhoto(
        category: string,
        subCategory: string,
        title: string,
        number: number,
        url: string,
        visibility: boolean
    ) {
        console.log("inside addphoto");

        const newPhoto = {
            title,
            number,
            url,
            visibility,
        };

        try {
            await addDoc(collection(db, "photos", category, subCategory), newPhoto);
            console.log("Photo added successfully");
        } catch (error) {
            console.error("Error adding photo:", error);
        }
    }

    async function editPhoto(
        category: string,
        photoId: string,
        newTitle: string,
        newNumber: number,
        visibility: boolean
    ) {
        try {
            const photoDocRef = doc(db, category, photoId);
            const photoDoc = await getDoc(photoDocRef);

            if (!photoDoc.exists()) {
                throw new Error("Photo not found");
            }

            // Update the photo document without changing the file
            await updateDoc(photoDocRef, {
                title: newTitle,
                number: newNumber,
                visibility: visibility,
            });
        } catch (error) {
            console.error("Error updating photo:", error);
            throw error;
        }
    }

    async function deletePhoto(photoTitle: string, photoId: string, selectedCategory: string) {
        try {
            // Initialize Firebase Storage
            const storage = getStorage();

            // Delete photo from Firebase Storage
            const photoRef = ref(storage, `${selectedCategory}/${photoTitle}`);
            await deleteObject(photoRef);

            // Delete photo from Firestore
            await deleteDoc(doc(db, selectedCategory, photoId));
            console.log("Photo deleted successfully");
        } catch (error) {
            console.log(error);
        }
    }

    async function changePhotoVisibility(category: string, photoId: string, visibility: boolean) {
        try {
            const updatedPhoto = {
                visibility: visibility,
            };

            await updateDoc(doc(db, category, photoId), updatedPhoto);
            console.log("Photo visibility updated successfully");
        } catch (error) {
            console.error("Error updating photo visibility:", error);
        }
    }

    return {
        // Photo fetching
        fetchPhotos,

        //Exhibit Actions
        fetchExhibits,
        addExhibition,
        editExhibition,
        deleteExhibition,

        // Photo Actions
        addPhoto,
        editPhoto,
        deletePhoto,
        changePhotoVisibility,
    };
}
