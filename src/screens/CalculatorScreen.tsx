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
        <ButtonComponent text="+/-" color="#9B9B9B" />
        <ButtonComponent text="del" color="#9B9B9B" />
        <ButtonComponent text="/" color="#FF9427" />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="7" />
        <ButtonComponent text="8" />
        <ButtonComponent text="9" />
        <ButtonComponent text="X" color="#FF9427" />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="4" />
        <ButtonComponent text="5" />
        <ButtonComponent text="6" />
        <ButtonComponent text="-" color="#FF9427" />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="1" />
        <ButtonComponent text="2" />
        <ButtonComponent text="3" />
        <ButtonComponent text="+" color="#FF9427" />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="0" wide />
        <ButtonComponent text="." />
        <ButtonComponent text="=" />
      </View>

    </View>
  );
};
