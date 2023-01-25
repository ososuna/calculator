import React from 'react';
import { Text, View } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={ styles.calculatorContainer }>
      <Text style={ styles.resultLittle }>1500</Text>
      <Text style={ styles.result }>1500</Text>
      <View style={ styles.row }>
        <ButtonComponent text="C" color="#9B9B9B" />
        <ButtonComponent text="C" color="#9B9B9B" />
        <ButtonComponent text="C" />
        <ButtonComponent text="C" color="#FF9427" />
      </View>
    </View>
  );
};
