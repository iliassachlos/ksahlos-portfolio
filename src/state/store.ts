import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './header/header-slice';
import photoModalReducer from './photo-modal/photo-modal-slice';
import adminReducer from './admin/admin-slice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
        photoModal: photoModalReducer,
        admin: adminReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
