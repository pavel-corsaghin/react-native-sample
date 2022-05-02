import React from 'react';
import { View } from 'react-native';
import { Colors } from '../colors';
import map from './Map';
import { IconBodyType } from './@types';

type Props = IconBodyType & {
  name: string;
  style?: any;
};

const icons: { [name: string]: React.ComponentType<any> } = {
  map,
};

const Icon = ({ name, color, size, style }: Props) => {
  const IconBody = icons[name];
  return (
    <View style={[style, iconStyles.container]}>
      {IconBody ? <IconBody color={color} size={size} /> : null}
    </View>
  );
};

Icon.defaultProps = {
  name: '',
  color: Colors.gray400,
  size: 24,
};

const iconStyles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Icon;
