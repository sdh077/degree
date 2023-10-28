import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Item = {
    author: String;
    content: String;
    src: String;
    tag: number[];
};

export const itemApi = createApi({
    reducerPath: "itemApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/",
    }),
    endpoints: (builder) => ({
        getItems: builder.query<Item[], null>({
            query: () => "items",
        }),
        getItemById: builder.query<Item, { id: string }>({
            query: ({ id }) => `Items/${id}`,
        }),
    }),
});

export const { useGetItemsQuery, useGetItemByIdQuery } = itemApi;