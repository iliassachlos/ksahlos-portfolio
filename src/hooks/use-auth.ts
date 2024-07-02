import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { User as FirebaseUser } from 'firebase/auth';
export function useAuth() {
    const [user, setUser] = useState<FirebaseUser | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);
    return user;
}
