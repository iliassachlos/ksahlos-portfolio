import { db } from '../firebase/config';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, updateDoc } from 'firebase/firestore';
import { IDocData, IExhibits, IExhibitsData, IPhoto } from '../interfaces/global.interface';
import { deleteObject, getBlob, getDownloadURL, getMetadata, getStorage, ref, uploadBytes } from '@firebase/storage';

export function useFirebase() {
    const storage = getStorage();

    // Fetch photos according to category and subcategory
    async function fetchPhotos(category: string): Promise<IPhoto[]> {
        try {
            const querySnapshot = await getDocs(query(collection(db, category), orderBy('number', 'asc')));
            return querySnapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as IDocData) }));
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Fetch exhibits
    async function fetchExhibits(): Promise<IExhibits[]> {
        try {
            const querySnapshot = await getDocs(query(collection(db, 'exhibits')));
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
        addDoc(collection(db, 'exhibits'), newExhibition)
            .then(() => {
                // Document added successfully
                console.log('Exhibition added successfully');
            })
            .catch((error) => {
                // Error occurred while adding the document
                console.error('Error adding exhibition:', error);
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
            await updateDoc(doc(db, 'exhibits', exhibitionId), editedExhibition);
            console.log('Exhibition updated successfully');
        } catch (error) {
            console.error('Error updating exhibition:', error);
        }
    }

    async function deleteExhibition(exhibitionId: string) {
        try {
            await deleteDoc(doc(db, 'exhibits', exhibitionId));
            console.log('Exhibition deleted successfully');
        } catch (error) {
            console.error('Error deleting exhibition:', error);
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
        console.log('inside addphoto');

        const newPhoto = {
            title,
            number,
            url,
            visibility,
        };

        try {
            await addDoc(collection(db, 'photos', category, subCategory), newPhoto);
            console.log('Photo added successfully');
        } catch (error) {
            console.error('Error adding photo:', error);
        }
    }

    async function editPhoto(
        category: string,
        photoId: string,
        newTitle: string,
        newNumber: number,
        newFile: File | null,
        visibility: boolean
    ) {
        const storage = getStorage();
        try {
            // Fetch the current photo document
            const photoDoc = await getDoc(doc(db, category, photoId));
            if (!photoDoc.exists()) {
                throw new Error('Photo does not exist');
            }

            const photoData = photoDoc.data() as IDocData;
            const oldUrl = photoData.url;

            // Extract the old file reference
            const oldFileRef = ref(storage, oldUrl);
            const oldFileSnapshot = await getMetadata(oldFileRef);
            const oldFile = await getBlob(oldFileRef);

            // New file reference with new title
            const newFileRef = ref(storage, `photos/${category}/${newTitle}`);
            await uploadBytes(newFileRef, oldFile);
            const newUrl = await getDownloadURL(newFileRef);

            // Delete the old file
            await deleteObject(oldFileRef);

            // Update the Firestore document with the new image URL and title
            const updatedPhoto = {
                title: newTitle,
                number: newNumber,
                url: newUrl,
                visibility: visibility,
            };

            await updateDoc(doc(db, category, photoId), updatedPhoto);
            console.log('Photo updated successfully');
        } catch (error) {
            console.error('Error updating photo:', error);
        }
    }

    async function deletePhoto(category: string, subCategory: string, photoId: string) {
        try {
            await deleteDoc(doc(db, 'photos', category, subCategory, photoId));
            console.log('Photo deleted successfully');
        } catch (error) {
            console.error('Error deleting photo:', error);
        }
    }

    async function changePhotoVisibility(category: string, subCategory: string, photoId: string, visibility: boolean) {
        try {
            const updatedPhoto = {
                visibility: visibility,
            };

            await updateDoc(doc(db, 'photos', category, subCategory, photoId), updatedPhoto);
            console.log('Photo visibility updated successfully');
        } catch (error) {
            console.error('Error updating photo visibility:', error);
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
