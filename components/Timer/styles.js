import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  timer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  timerText: {
    margin: 50,
    fontSize: 50,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  display: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  command: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: "100%",
    backgroundColor: 'white',
  },
});

export default styles;