import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  option: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  row: {
    backgroundColor: 'white',
    margin: 3, 
    borderRadius: 6, 
  },
  rowSelected: {
    backgroundColor: 'grey', 
    margin: 3, 
    borderRadius: 6, 
  }
});

export default styles;