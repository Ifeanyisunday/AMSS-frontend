import { configureStore } from "@reduxjs/toolkit";
import functionalty from "../apis/Functionalty";


const store = configureStore({
    reducer:{
        [functionalty.reducerPath] : functionalty.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(functionalty.middleware),
});

export default store
