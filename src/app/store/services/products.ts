import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {Product, Products} from '../types.ts';

interface GetSearchProductsParams {
    name: string,
    limit: number,
    skip: number,
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProductById: builder.query<Product, string>({
            query: (id: string) => `products/${id}`,
        }),
        getSearchProducts: builder.query<Products, GetSearchProductsParams>({
            query: ({name, limit, skip}) => `products/search?q=${name}&limit=${limit}&skip=${skip}`,
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: (currentCache, newItems) => {
                // console.log(currentCache, newItems);
                //     currentCache.products = [...currentCache.products, ...newItems.products],
                    currentCache.products.push(...newItems.products);
                    // currentCache.skip = newItems.skip;
                    // currentCache.limit = newItems.limit;

                // currentCache.products.push(...newItems.products);
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            }
        }),
    }),
})

export const { useGetProductByIdQuery, useGetSearchProductsQuery } = productsApi;