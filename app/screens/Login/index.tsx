import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { AuthStackProps } from 'app/navigation/@types';
import { login } from '../../store/@slices/auth';

const Login: React.FC<AuthStackProps<'Login'>> = ({ navigation }) => {
  const dispatch = useDispatch();
  const onLogin = () => dispatch(login('test', '1234'));
  const onForgot = () => navigation.navigate('ForgotPassword');
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Button icon="login" mode="outlined" onPress={onLogin}>
          Login
        </Button>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Forgot Password
        </Button>
      </View>
    </View>
  );
};

export default Login;
