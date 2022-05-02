import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'app/screens/Login';
import ForgotPassword from 'app/screens/ForgotPassword';
import { AuthStackParamList, AuthStackRoute } from './@types';

type Screen = {
  name: AuthStackRoute;
  title: string;
  component: React.ComponentType<any>;
};

const Stack = createStackNavigator<AuthStackParamList>();
const screens: Screen[] = [
  {
    name: 'Login',
    title: ' ',
    component: Login,
  },
  {
    name: 'ForgotPassword',
    title: '',
    component: ForgotPassword,
  },
];

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default AuthStack;
