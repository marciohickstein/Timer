// import styles from './styles';
// import { View, Button } from 'react-native';
// import { useState } from 'react';

// function Command(props) {
//     let [ state, setState ] = useState(STATE_OFF);

//     const handleButton = (button) => {
//         const newState = (button === BUTTON_CLEAR || button === BUTTON_STOP) ? STATE_OFF : STATE_ON;

//         setState(newState);

//         props.onPress(button, newState);
//     }

//     const getButtonByStatus = () => {
//         return state === STATE_OFF ? BUTTON_START : BUTTON_STOP;
//     }
    
 
//     return (
//         <View style={styles.command}>
//             <Button onPress={() => handleButton(BUTTON_CLEAR)} title="Clear" />
//             <Button onPress={() => handleButton(getButtonByStatus())} title={getButtonByStatus()} />
//         </View>
//     );
// }

// export default Command;