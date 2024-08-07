import React, {FC, useEffect} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {PostsEffects, PostsSelectors, useAppDispatch} from 'store';
import {RootStackParamList, ScreenRoutes} from 'types';

type Props = NativeStackScreenProps<RootStackParamList, ScreenRoutes.PostsScreen>;

const PostsScreen: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(PostsSelectors.selectAllPosts);
  const postStatus = useSelector(PostsSelectors.selectStatus);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(PostsEffects.fetchPosts());
    }
  }, [postStatus, dispatch]);

  const renderPost = ({item}: {item: any}) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
      <View style={styles.actions}>
        <Button title="Edit" onPress={() => console.log('1')} />
        <Button title="Delete" onPress={() => console.log('1')} />
      </View>
    </View>
  );

  return (
    <View>
      <FlatList data={posts} renderItem={renderPost} keyExtractor={(item) => item.id.toString()} />
      <Button title="Add Post" onPress={() => console.log('1')} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default PostsScreen;
