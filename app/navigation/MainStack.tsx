import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Home from 'app/screens/Home';
import ThemeController from 'app/components/ThemeController';
import { MainStackParamList, MainStackRoute } from './@types';

type Screen = {
  name: MainStackRoute;
  title: string;
  component: React.ComponentType<any>;
  options: StackNavigationOptions;
};

const Stack = createStackNavigator<MainStackParamList>();
const screens: Screen[] = [
  {
    name: 'Home',
    title: ' ',
    component: Home,
    options: {
      title: 'Home',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => <ThemeController />,
    },
  },
];

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
}

export default AuthStack;
