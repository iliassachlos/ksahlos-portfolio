import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './header/header-slice';
import photoModalReducer from './photo-modal/photo-modal-slice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
        photoModal: photoModalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
