import {createApi} from '@reduxjs/toolkit/query/react';
import {Cart, CartInfo, UpdateCartRequest} from './types';
import baseQueryWithRedirect from '../baseQueryWithRedirect/baseQueryWithRedirect.ts';

export const cartByUserIdApi = createApi({
    reducerPath: 'cartByUserIdApi',
    baseQuery: baseQueryWithRedirect,
    endpoints: (builder) => ({
        getCartByUserId: builder.query<CartInfo, number>({
            query: (id) => (
                {
                    url: `carts/user/${id}`,
                }
            )
        }),
        updateCartByUserId: builder.mutation<Cart, UpdateCartRequest>({
            query: ({id, products, merge}) => (
                {
                    url: `carts/${id}`,
                    method: 'PUT',
                    body: {
                        merge,
                        products
                    },
                }
            )
        }),
    }),
});

export const {useGetCartByUserIdQuery, useUpdateCartByUserIdMutation} = cartByUserIdApi;