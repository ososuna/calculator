import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {

  const [ number, setNumber ] = useState('0');
  const [ prevNumber, setPrevNumber ] = useState('0');

  const clean = () => {
    setNumber('0');
  };

  const buildNumber = ( textNumber: string ) => {
    setNumber( number === '0' ? textNumber : number + textNumber );
  };

  return (
    <View style={ styles.calculatorContainer }>

      <Text style={ styles.resultLittle }>{ prevNumber }</Text>
      <Text
        style={ styles.result }
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
        { number }
      </Text>

      <View style={ styles.row }>
        <ButtonComponent text="C" color="#9B9B9B" action={ clean } />
        <ButtonComponent text="+/-" color="#9B9B9B" action={ clean } />
        <ButtonComponent text="del" color="#9B9B9B" action={ clean } />
        <ButtonComponent text="/" color="#FF9427" action={ clean } />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="7" action={ buildNumber } />
        <ButtonComponent text="8" action={ buildNumber } />
        <ButtonComponent text="9" action={ buildNumber } />
        <ButtonComponent text="X" color="#FF9427" action={ clean } />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="4" action={ buildNumber } />
        <ButtonComponent text="5" action={ buildNumber } />
        <ButtonComponent text="6" action={ buildNumber } />
        <ButtonComponent text="-" color="#FF9427" action={ clean } />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="1" action={ buildNumber } />
        <ButtonComponent text="2" action={ buildNumber } />
        <ButtonComponent text="3" action={ buildNumber } />
        <ButtonComponent text="+" color="#FF9427" action={ clean } />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="0" action={ buildNumber } wide />
        <ButtonComponent text="." action={ buildNumber } />
        <ButtonComponent text="=" action={ clean } />
      </View>

    </View>
  );
};
