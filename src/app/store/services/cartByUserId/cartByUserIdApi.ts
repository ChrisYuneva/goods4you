import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {CartInfo} from './types';
import {getToken} from '../../../utils';

export const cartByUserIdApi = createApi({
    reducerPath: 'cartByUserIdApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getCartByUserId: builder.query<CartInfo, number>({
            query: (id: number) => (
                {
                    url: `carts/user/${id}`,
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                    }
                }
            )
        }),
    }),
});

export const {useGetCartByUserIdQuery} = cartByUserIdApi;