import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {CartInfo} from './types';

export const cartByUserIdApi = createApi({
    reducerPath: 'cartByUserIdApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getCartByUserId: builder.query<CartInfo, string>({
            query: () => 'carts/user/11'
        }),
    }),
})

export const {useGetCartByUserIdQuery } = cartByUserIdApi;