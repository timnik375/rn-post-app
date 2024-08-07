import {configureStore} from '@reduxjs/toolkit';

import {postsReducer as posts} from './slices/posts';

const store = configureStore({
  reducer: {
    posts,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
