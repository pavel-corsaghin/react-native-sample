import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Main Tab Bar Navigation props
export type MainTabBarParamList = {
  Home: undefined;
  Profile: undefined;
};
export type MainTabBarRoute = keyof MainTabBarParamList;
export type MainTabBarProp = {
  navigation: BottomTabNavigationProp<MainTabBarParamList>;
};

// Main Stack Navigation props
export type MainStackParamList = {
  Main: undefined;
};
export type MainStackRoute = keyof MainStackParamList;
export type MainStackNavigation = StackNavigationProp<MainStackParamList>;
export type MainStackProps<T extends MainStackRoute> = {
  route: RouteProp<MainStackParamList, T>;
  navigation: StackNavigationProp<MainStackParamList>;
};

// Auth Stack Navigation props
export type AuthStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
};
export type AuthStackRoute = keyof AuthStackParamList;
export type AuthStackProps<T extends AuthStackRoute> = {
  route: RouteProp<AuthStackParamList, T>;
  navigation: StackNavigationProp<AuthStackParamList>;
};
