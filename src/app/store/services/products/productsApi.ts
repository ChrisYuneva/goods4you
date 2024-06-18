import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Product, Products} from './types';
import {GetSearchProductsParams} from '../../slices/searchProductParams/types';
import {getToken} from '../../../utils';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProductById: builder.query<Product, string>({
            query: (id: string) => (
                {
                    url: `products/${id}`,
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                    }
                }
            ),
        }),
        getSearchProducts: builder.query<Products, GetSearchProductsParams>({
            query: ({name, limit, skip}) => (
                {
                    url: '/products/search',
                    params: {
                        q: name,
                        limit: limit,
                        skip: skip
                    },
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                    }
                }
            ),
            serializeQueryArgs: ({ endpointName, queryArgs}) => {
                return endpointName + queryArgs.name;
            },
            merge: (currentCache, newItems) => {
                const existingIds = new Set(currentCache.products.map(product => product.id));
                const newUniqueProducts = newItems.products.filter(product => !existingIds.has(product.id));
                currentCache.products.push(...newUniqueProducts);
            },
            forceRefetch({currentArg, previousArg}) {
                return currentArg?.name !== previousArg?.name || currentArg?.skip !== previousArg?.skip;
            },
        }),
    }),
})

export const {useGetProductByIdQuery, useGetSearchProductsQuery} = productsApi;