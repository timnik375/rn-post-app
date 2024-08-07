import {RootState} from '../store';

export const selectPost = (id: number) => (state: RootState) => state.posts.posts.find((post) => post.id === id);
export const selectAllPosts = (state: RootState) => state.posts.posts;
export const selectStatus = (state: RootState) => state.posts.status;
