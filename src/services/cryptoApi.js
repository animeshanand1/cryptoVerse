import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const CryptoApiheaders = {
  "X-RapidAPI-Key": "2d6a375965msh4086beaa214d11bp183e8ajsne059ceaecacd",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com/coins";
const createRequest = (url) => ({ url, headers: CryptoApiheaders });
export const CryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl:'/' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptosQuery } = CryptoApi;
