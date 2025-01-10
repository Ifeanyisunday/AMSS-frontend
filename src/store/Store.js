import { configureStore } from "@reduxjs/toolkit";
import auth from "../apis/Auth";
import { functions } from "../apis/Functions";


const store = configureStore({
    reducer:{
        [auth.reducerPath] : auth.reducer,
        [functions.reducerPath] : functions.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(auth.middleware, functions.middleware),
});

export default store
