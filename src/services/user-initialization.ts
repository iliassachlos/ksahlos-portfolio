import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/use-auth";
import { setUser, setIsLoggedIn } from "../state/user/user-slice";

function UserInitialization() {
    const user = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(setUser(user));
            dispatch(setIsLoggedIn(true));
        }
    }, [user, dispatch]);

    return null;
}

export default UserInitialization;
