import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { isLoggedIn } from 'app/store/@slices/auth';

interface IProps {
  theme: Theme;
}

const RootStack: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isUserLoggedIn = useSelector(isLoggedIn);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      {isUserLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootStack;
