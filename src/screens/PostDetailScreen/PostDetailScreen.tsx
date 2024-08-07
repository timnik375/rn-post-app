import React, {FC, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {PostsSelectors} from 'store';
import {RootStackParamList, ScreenRoutes} from 'types';

type Props = NativeStackScreenProps<RootStackParamList, ScreenRoutes.PostDetailScreen>;

const PostDetailScreen: FC<Props> = ({route, navigation}) => {
  const {id} = route.params;

  const post = useSelector(PostsSelectors.selectPost(id));

  const [title, setTitle] = useState(post ? post.title : '');
  const [body, setBody] = useState(post ? post.body : '');

  const handleSave = () => {
    if (id) {
      console.log('1');
    } else {
      console.log('1');
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Body" value={body} onChangeText={setBody} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 8,
    fontSize: 18,
  },
});

export default PostDetailScreen;
