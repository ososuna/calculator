/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  wide?: boolean;
}

export const ButtonComponent = ({ text, color = '#2D2D2D', wide = false }: Props) => {
  return (
    <TouchableOpacity>
      <View style={{
        ...styles.button,
        backgroundColor: color,
        width: ( wide ) ? 180 : 80,
      }}>
        <Text style={{
          ...styles.textButton,
          color: ( color ) === '#9B9B9B' ? 'black' : 'white',
        }}>
          { text }
        </Text>
      </View>
    </TouchableOpacity>
  );
};
