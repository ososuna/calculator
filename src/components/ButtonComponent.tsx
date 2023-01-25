import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
}

export const ButtonComponent = ({ text, color = '#2D2D2D' }: Props) => {
  return (
    <View style={{ ...styles.button, backgroundColor: color }}>
      <Text style={styles.textButton}>{ text }</Text>
    </View>
  );
};
