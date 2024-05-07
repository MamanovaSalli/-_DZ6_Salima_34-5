import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import tasksReducer from './taskasSlice'
import articleReducer from './articleSlice';
export const store = configureStore({
    reducer: {
        tasksReducer,
        articleReducer,

    },
    middleware: ( getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})