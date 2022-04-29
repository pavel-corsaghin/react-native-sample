import { logout } from 'app/store/@slices/auth';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import styles from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());

  return (
    <View style={styles.container}>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;
