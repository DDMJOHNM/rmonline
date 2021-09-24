import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './reducers/ClientReducer'; 

export const store = configureStore({
    reducer:{
       practise:clientReducer
    }
}) 

//pre typed versions of useDispatch and useSelector
export type RootState = ReturnType<typeof store.getState>
//avoids having to type to rootState in each component
export type AppDispatch = typeof store.dispatch
//contains AppDispatch type which contains thunks middleware types 




