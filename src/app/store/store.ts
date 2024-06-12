import { configureStore } from '@reduxjs/toolkit';
import {productsApi} from './services/products.ts';
import {cartByUserIdApi} from './services/cartByUserId.ts';
import {searchProductsParamsSlice} from './slices/searchProductParamsSlice.ts';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [cartByUserIdApi.reducerPath]: cartByUserIdApi.reducer,
        searchProductsParams: searchProductsParamsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware, cartByUserIdApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;