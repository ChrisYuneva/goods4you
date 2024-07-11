import { configureStore } from '@reduxjs/toolkit';
import {productsApi} from '@app/store/services/products/productsApi.ts';
import {cartByUserIdApi} from '@app/store/services/cartByUserId/cartByUserIdApi.ts';
import {authorizationApi} from '@app/store/services/authorization/authorizationApi.ts';
import {searchProductsParamsSlice} from '@app/store/slices/searchProductParams/searchProductParamsSlice.ts';
import {cartByUserIdSlice} from '@app/store/slices/cartByUserId/cartByUserIdSlice.ts';
import {authSlice} from '@app/store/slices/authSlice/authSlice.ts';
import {notificationErrorSlice} from '@app/store/slices/notificationError/notificationError.ts';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [cartByUserIdApi.reducerPath]: cartByUserIdApi.reducer,
        [authorizationApi.reducerPath]: authorizationApi.reducer,
        searchProductsParams: searchProductsParamsSlice.reducer,
        cartByUserId: cartByUserIdSlice.reducer,
        auth: authSlice.reducer,
        error: notificationErrorSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware, cartByUserIdApi.middleware, authorizationApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;