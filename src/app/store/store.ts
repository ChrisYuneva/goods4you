import { configureStore } from '@reduxjs/toolkit';
import {productsApi} from './services/products.ts';
import {cartByUserIdApi} from './services/cartByUserId.ts';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [cartByUserIdApi.reducerPath]: cartByUserIdApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware, cartByUserIdApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;