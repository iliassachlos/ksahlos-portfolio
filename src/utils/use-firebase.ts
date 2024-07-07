import { db } from '../firebase/config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { IDocData, IExhibits, IExhibitsData, IPhoto } from '../interfaces/global.interface';

export function useFirebase() {
    // Fetch photos according to category and subcategory
    async function fetchData(category: string, subCategory: string): Promise<IPhoto[]> {
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

    return { fetchData, fetchExhibits };
}
