import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import { AuthStackProps } from 'app/navigation/@types';

const ForgotPassword: React.FC<AuthStackProps<'ForgotPassword'>> = ({
  navigation,
}) => {
  const goBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <Button icon="keyboard-backspace" mode="outlined" onPress={goBack}>
        Go Back
      </Button>
    </View>
  );
};

export default ForgotPassword;
