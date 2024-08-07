import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';

import {RootStackParamList} from 'types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ScreenWithoutHeaderConfig: NativeStackNavigationOptions = {
  headerShown: false,
};
export {ScreenWithoutHeaderConfig, Stack};
