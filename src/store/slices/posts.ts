import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostsDataService} from 'services/data-services';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

const fetchPosts = createAsyncThunk('posts/fetchPosts', PostsDataService.fetchPosts);

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.posts.push(action.payload);
      },
      prepare(title: string, body: string) {
        return {
          payload: {
            id: Date.now(),
            title,
            body,
          } as Post,
        };
      },
    },
    postUpdated(state, action: PayloadAction<Post>) {
      const {id, title, body} = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
    },
    postDeleted(state, action: PayloadAction<{id: number}>) {
      const {id} = action.payload;
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const PostsActions = {...posts.actions};
export const PostsEffects = {fetchPosts};

export const postsReducer = posts.reducer;
