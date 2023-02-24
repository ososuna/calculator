import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { styles } from '../theme/appTheme';

enum Operators {
  add, subtract, multiply, divide
}

export const CalculatorScreen = () => {

  const [ number, setNumber ] = useState('0');
  const [ prevNumber, setPrevNumber ] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const buildNumber = ( textNumber: string ) => {
    if ( number.includes('.') && textNumber === '.' ) { return; } // Do not accept double point
    if ( number.startsWith('0') || number.startsWith('-0') ) {
      // Decimal point
      if ( textNumber === '.' ) {
        setNumber( number + textNumber );
      // Evaluate if it is another zero and there is no point
      } else if ( textNumber === '0' && number.includes('.') ) {
        setNumber( number + textNumber );
      // Evaluate if it is different from zero and there is no point
      } else if ( textNumber !== '0' && !number.includes('.') ) {
        setNumber( textNumber );
      // Avoid 000.0
      } else if ( textNumber === '0' && !number.includes('.') ) {
        setNumber( number );
      } else {
        setNumber( number + textNumber );
      }
    } else {
      setNumber( number + textNumber );
    }
  };

  const positiveNegative = () => {
    if ( number.includes('-') ) {
      setNumber( number.replace('-', '') );
    } else {
      setNumber( '-' + number );
    }
  };

  const btnDelete = () => {
    let negative = '';
    let tempNumber = number;
    if ( number.includes('-') ) {
      negative = '-';
      tempNumber = number.substr(1);
    }
    if ( tempNumber.length > 1 ) {
      setNumber( negative + tempNumber.slice(0, -1) );
    } else {
      setNumber('0');
    }
  };

  const changeNumberToPrev = () => {
    if ( number.endsWith('.') ) {
      setPrevNumber( number.slice(0, -1) );
    } else {
      setPrevNumber( number );
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumberToPrev();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeNumberToPrev();
    lastOperation.current = Operators.multiply;
  };

  const btnAdd = () => {
    changeNumberToPrev();
    lastOperation.current = Operators.add;
  };

  const btnSubtract = () => {
    changeNumberToPrev();
    lastOperation.current = Operators.subtract;
  };

  const calculate = () => {
    const num1 = Number( number );
    const num2 = Number( prevNumber );

    switch ( lastOperation.current ) {
      case Operators.add:
        setNumber( `${ num1 + num2 }` );
        break;
      case Operators.subtract:
        setNumber( `${ num2 - num1 }` );
        break;
      case Operators.multiply:
        setNumber( `${ num1 * num2 }` );
        break;
      case Operators.divide:
        setNumber( `${ num2 / num1 }` );
        break;
    }
    setPrevNumber('0');
  };

  return (
    <View style={ styles.calculatorContainer }>
      {
        ( prevNumber !== '0' ) && <Text style={ styles.resultLittle }>{ prevNumber }</Text>
      }
      <Text
        style={ styles.result }
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
        { number }
      </Text>

      <View style={ styles.row }>
        <ButtonComponent text="C" color="#9B9B9B" action={ clean } />
        <ButtonComponent text="+/-" color="#9B9B9B" action={ positiveNegative } />
        <ButtonComponent text="del" color="#9B9B9B" action={ btnDelete } />
        <ButtonComponent text="/" color="#FF9427" action={ btnDivide } />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="7" action={ buildNumber } />
        <ButtonComponent text="8" action={ buildNumber } />
        <ButtonComponent text="9" action={ buildNumber } />
        <ButtonComponent text="X" color="#FF9427" action={ btnMultiply } />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="4" action={ buildNumber } />
        <ButtonComponent text="5" action={ buildNumber } />
        <ButtonComponent text="6" action={ buildNumber } />
        <ButtonComponent text="-" color="#FF9427" action={ btnSubtract } />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="1" action={ buildNumber } />
        <ButtonComponent text="2" action={ buildNumber } />
        <ButtonComponent text="3" action={ buildNumber } />
        <ButtonComponent text="+" color="#FF9427" action={ btnAdd } />
      </View>

      <View style={ styles.row }>
        <ButtonComponent text="0" action={ buildNumber } wide />
        <ButtonComponent text="." action={ buildNumber } />
        <ButtonComponent text="=" action={ calculate } />
      </View>

    </View>
  );
};
