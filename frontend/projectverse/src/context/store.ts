import { configureStore} from '@reduxjs/toolkit'

import { apiSlice } from '../API Services/apiSlice';
import authReducer from '../features/Auth/authSlice'
import collabReducer from '../features/Collaborations/collabSlice'
import portfolioReducer from '../features/Portfolio/portfolioSlice';
import feedReducer from '../features/Feed/feedSlice';
import designerReducer from '../features/Designer/designerSlice';


const store = configureStore({

  reducer:{
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth:authReducer,
    collab:collabReducer,
    portfolio:portfolioReducer,
    feed:feedReducer,
    designer:designerReducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:true

})

export default store;