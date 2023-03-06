import { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import SoundList from '../../classes/SoundList';

function Option(props) {
    const soundList = new SoundList();
    let [ sound, setSound ] = useState(soundList.getSound(0));

    function handleButton(item) {
      setSound(item);
      props.onChangeSound(item);
      console.log(item);
    }

    function renderRow({ item }) {
        return (
          <TouchableOpacity style={item.id === sound.id ? styles.rowSelected : styles.row} onPress={() => handleButton(item)}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        );
      }
    
    return (
        <View style={styles.option}>
            <FlatList style={{ marginTop: 20}} data={soundList.getAllSounds()} renderItem={renderRow} />
        </View>
    )
}

export default Option;