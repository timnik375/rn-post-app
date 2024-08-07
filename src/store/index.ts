import {useDispatch} from 'react-redux';

import * as PostsSelectors from './selectors/posts';
import {PostsActions, PostsEffects} from './slices/posts';
import store from './store';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export {PostsActions, PostsEffects, PostsSelectors, store};
