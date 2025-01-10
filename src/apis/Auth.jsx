import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const auth = createApi({
    reducerPath: 'authentication',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:8000/'}),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (reguser) => ({
                url: 'auth/users/',
                method: 'POST',
                body: reguser,
            }),
        }),
        loginUser: builder.mutation({
            query: (loguser) => ({
                url: 'auth/jwt/create/',
                method: 'POST',
                body: loguser,
            }),
        }),
    })
})

export const { useRegisterUserMutation, useLoginUserMutation } = auth
export default auth
