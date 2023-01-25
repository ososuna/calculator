import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={ styles.calculatorContainer }>
      <Text style={ styles.resultLittle }>1500</Text>
      <Text style={ styles.result }>1500</Text>
      <View>
        <View style={ styles.button }>
          <Text style={ styles.textButton }>C</Text>
        </View>
      </View>
    </View>
  );
};
