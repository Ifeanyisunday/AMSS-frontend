import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const functionalty = createApi({
    reducerPath: 'register',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user,
            }),
        }),
        loginUser: builder.mutation({
            query: (loguser) => ({
                url: '/register',
                method: 'POST',
                body: loguser,
            }),
        }),
        logUser: builder.mutation({
            query: (loguser) => ({
                url: '/register',
                method: 'POST',
                body: loguser,
            }),
        }),
        createBusiness: builder.mutation({
            query: (userBusiness) => ({
                url: '/register',
                method: 'POST',
                body: userBusiness,
            }),
        }),
        createBudget: builder.mutation({
            query: (budget) => ({
                url: '/register',
                method: 'POST',
                body: budget,
            }),
        }),
    })
})

export default functionalty
