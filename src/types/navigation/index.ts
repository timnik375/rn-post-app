export enum ScreenRoutes {
  PostsScreen = 'Posts',
  PostDetailScreen = 'PostDetail',
}

export type RootStackParamList = {
  [ScreenRoutes.PostsScreen]: undefined;
  [ScreenRoutes.PostDetailScreen]: {id: number | null};
};
