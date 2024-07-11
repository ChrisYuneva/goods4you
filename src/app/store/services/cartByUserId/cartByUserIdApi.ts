import {createApi} from '@reduxjs/toolkit/query/react';
import baseQueryWithRedirect from '@app/store/services/baseQueryWithRedirect/baseQueryWithRedirect.ts';
import {Cart, CartInfo, UpdateCartRequest} from '@app/store/services/cartByUserId/types';
import {getToken} from '@app/utils';

export const cartByUserIdApi = createApi({
    reducerPath: 'cartByUserIdApi',
    baseQuery: baseQueryWithRedirect,
    endpoints: (builder) => ({
        getCartByUserId: builder.query<CartInfo, number>({
            query: (id) => (
                {
                    url: `carts/user/${id}`,
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                    }
                }
            )
        }),
        updateCartByUserId: builder.mutation<Cart, UpdateCartRequest>({
            query: ({id, products, merge}) => (
                {
                    url: `carts/${id}`,
                    headers: {
                        'Authorization': `Bearer ${getToken()}`
                    },
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