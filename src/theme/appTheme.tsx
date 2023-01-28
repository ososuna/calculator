import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultLittle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 80,
  },
  textButton: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    padding: 10,
    textAlign: 'center',
  },
});
