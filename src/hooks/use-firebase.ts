import { db } from '../firebase/config';
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from 'firebase/firestore';
import { IDocData, IExhibits, IExhibitsData, IPhoto } from '../interfaces/global.interface';

export function useFirebase() {
    // Fetch photos according to category and subcategory
    async function fetchFineArtPhotos(category: string, subCategory: string): Promise<IPhoto[]> {
        try {
            const querySnapshot = await getDocs(
                query(collection(db, 'photos', category, subCategory), orderBy('number', 'asc'))
            );
            return querySnapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as IDocData) }));
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async function fetchLocalArtPhotos(): Promise<IPhoto[]> {
        try {
            const querySnapshot = await getDocs(query(collection(db, 'photos', 'local-art'), orderBy('number', 'asc')));
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

    return { fetchFineArtPhotos, fetchLocalArtPhotos, fetchExhibits, addExhibition, editExhibition, deleteExhibition };
}
