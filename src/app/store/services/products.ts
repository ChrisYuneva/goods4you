import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {GetSearchProductsParams, Product, Products} from '../types.ts';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProductById: builder.query<Product, string>({
            query: (id: string) => `products/${id}`,
        }),
        getSearchProducts: builder.query<Products, GetSearchProductsParams>({
            query: ({name, limit, skip}) => (
                {
                    url: '/products/search?',
                    params: {
                        q: name,
                        limit: limit,
                        skip: skip
                    }
                }
            ),
            serializeQueryArgs: ({ endpointName, queryArgs }) => {
                return endpointName + queryArgs.name;
            },
            merge: (currentCache, newItems) => {
                currentCache.products.push(...newItems.products);
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
    }),
})

export const { useGetProductByIdQuery, useGetSearchProductsQuery } = productsApi;