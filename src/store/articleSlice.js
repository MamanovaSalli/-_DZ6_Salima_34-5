import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
    name: 'article',
    initialState: {
        showFullArticle: false,
    },
    reducers: {
        toggleFullArticle: (state) => {
            state.showFullArticle = !state.showFullArticle;
        }
    }
});

export const { toggleFullArticle } = articleSlice.actions;

export default articleSlice.reducer;

