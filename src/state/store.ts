import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './header/header-slice';
import photoModalReducer from './photo-modal/photo-modal-slice';
import adminReducer from './admin/admin-slice';
import exhibitReducer from './admin/exhibit-slice';
import photoReducer from './admin/photo-slice';
import userReducer from './user/user-slice';
import achievementReducer from './achievement-modal/achievement-modal-slice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
        photoModal: photoModalReducer,
        admin: adminReducer,
        exhibit: exhibitReducer,
        photo: photoReducer,
        user: userReducer,
        achievementModal: achievementReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
