import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const functions = createApi({
    reducerPath: 'functions',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:8000/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
              headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
          },
    }),
    endpoints: (builder) => ({
        business: builder.mutation({
            query: (addbusiness) => ({
                url: 'user-business/business/',
                method: 'POST',
                body: addbusiness,
            }),
        }),
        income: builder.mutation({
            query: (addincome) => ({
                url: 'finance/incomes/',
                method: 'POST',
                body: addincome,
            }),
        }),
        expense: builder.mutation({
            query: (addexpense) => ({
                url: 'finance/expenses/',
                method: 'POST',
                body: addexpense,
            }),
        }),
        updateBusiness: builder.mutation({
            query: ({id, business}) => ({
                url: `user-business/business/${id}/`,
                method: 'PUT',
                body: business,
            }),
        }),
        staff: builder.mutation({
            query: (addstaff) => ({
                url: 'user-business/register-business-staff/',
                method: 'POST',
                body: addstaff
            })
        })
    })
})

export const { useBusinessMutation, useUpdateBusinessMutation, useStaffMutation, useIncomeMutation, useExpenseMutation } = functions
export default functions
