import {createApi} from '@reduxjs/toolkit/query/react';
import {CartInfo} from './types';
import {getToken} from '../../../utils';
import baseQueryWithRedirect from '../../baseQueryWithRedirect/baseQueryWithRedirect.ts';

export const cartByUserIdApi = createApi({
    reducerPath: 'cartByUserIdApi',
    baseQuery: baseQueryWithRedirect,
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