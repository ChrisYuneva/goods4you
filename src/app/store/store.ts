import { configureStore } from '@reduxjs/toolkit';
import {productsApi} from './services/products/productsApi.ts';
import {cartByUserIdApi} from './services/cartByUserId/cartByUserIdApi.ts';
import {searchProductsParamsSlice} from './slices/searchProductParams/searchProductParamsSlice.ts';
import {cartByUserIdSlice} from './slices/cartByUserId/cartByUserIdSlice.ts';
import {authorizationApi} from './services/authorization/authorizationApi.ts';
import {authSlice} from './slices/authSlice/authSlice.ts';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [cartByUserIdApi.reducerPath]: cartByUserIdApi.reducer,
        [authorizationApi.reducerPath]: authorizationApi.reducer,
        searchProductsParams: searchProductsParamsSlice.reducer,
        cartByUserId: cartByUserIdSlice.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware, cartByUserIdApi.middleware, authorizationApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;