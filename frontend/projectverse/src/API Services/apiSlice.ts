import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { logOut, setCredentials } from '../features/Auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://localhost:3000/api',
  credentials:'include',
  prepareHeaders: (headers,{getState}) =>{
    const token = getState().auth.token
    if(token){
      headers.set('Authorization',`Bearer ${token}`)
      headers.set('mode','cors')
      headers.set('cache', "no-cache")
    }
    return headers
  }
})

const baseQueryWithReauth = async (args,api,extraOptions) =>{
  let result = await baseQuery(args,api,extraOptions)

  if(result?.error?.originalStatus === 403){
    const refreshResult = await baseQuery('/refresh',api,extraOptions);
    console.log(refreshResult);
    if(refreshResult?.data){
      const user = api.getState().auth.user
      api.dispatch(setCredentials({...refreshResult.data,user}))
      

      result = await baseQuery(args,api,extraOptions)
    }
    else{
      api.dispatch(logOut({}))
    }
  }
  return result
}


export const apiSlice = createApi({
  baseQuery:baseQuery,
  endpoints:builder =>({})
}) 