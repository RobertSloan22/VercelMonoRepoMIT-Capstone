import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const backendURL =
  process.env.NODE_ENV !== 'production'
    ?'https://oceanconnect-a532f183b3af.herokuapp.com/''
    : import.meta.env.VITE_SERVER_URL

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendURL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (build) => ({
    getUserProfile: build.query({
      query: () => ({
        url: 'api/user/profile',
        method: 'GET',
      }),
    }),
    deposit: build.mutation({
      query: (amount) => ({
        url: 'api/user/deposit',
        method: 'POST',
        body: { amount },
      }),
    }),
    withdraw: build.mutation({
      query: (amount) => ({
        url: 'api/user/withdraw',
        method: 'POST',
        body: { amount },
      }),
    }),
  }),
})

// export react hooks
export const { useGetUserProfileQuery, useDepositMutation, useWithdrawMutation } = authApi
