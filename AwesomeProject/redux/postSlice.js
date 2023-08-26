import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	posts: [],
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
    createPost(state, {payload}) {
        state.posts.push(payload)

    }
    
    },
});


export const {createPost} = postsSlice.actions