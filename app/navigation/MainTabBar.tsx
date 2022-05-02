import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { MainStackProps, MainTabBarParamList, MainTabBarRoute } from './@types';
import ProfileScreen from 'app/screens/Profile';
import HomeScreen from 'app/screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'app/assets/colors';

type Screen = {
  name: MainTabBarRoute;
  title: string;
  component: React.ComponentType<any>;
  iconName: string;
};

const screens: Screen[] = [
  { name: 'Home', title: 'Home', component: HomeScreen, iconName: 'home' },
  {
    name: 'Profile',
    title: 'Profile',
    component: ProfileScreen,
    iconName: 'account',
  },
];

const Tab = createBottomTabNavigator<MainTabBarParamList>();

function MainTabBar({ navigation }: MainStackProps<'Main'>) {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { position: 'absolute' },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary,
      }}>
      {screens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.tabbarIcon}>
                <Icon name={screen.iconName} size={24} color={color} />
                <Text style={[styles.title, { color: color }]}>
                  {t(screen.title)}
                </Text>
              </View>
            ),
            headerShown: screen.name === 'Home',
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabbarIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 4,
    fontStyle: 'normal',
  },
});

export default MainTabBar;
