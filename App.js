import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Option from './components/Option';
import Timer from './components/Timer';
import SoundList from './classes/SoundList';

export default function App() {
  let [ oper, setOper ] = useState(0);
  let [ sound, setSound ] = useState(new SoundList().getSound(0));

  function getSound(sound) {
    setSound(sound);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Timer sound={sound}/>
      <Option onChangeSound={getSound}/>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  
});