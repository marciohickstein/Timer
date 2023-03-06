import { View, TextInput, Text, Button } from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

const BUTTON_CANCEL = 'Cancel';
const BUTTON_PAUSE = 'Pause';
const BUTTON_RESUME = 'Resume';
const BUTTON_START = 'Start';

const STATE_OFF    = 0;
const STATE_ON     = 1;
const STATE_PAUSED = 2;


function Timer(props) {
    let [sound, setSound] = useState();
    let [song, setSong] = useState(props.sound);
    let [state, setState] = useState(STATE_OFF);

    let [time, setTime] = useState(0);
    let [timer, setTimer] = useState(null);

    const handleButton = (button) => {
console.log(button)

        let newState;


        if (button === BUTTON_START && state === STATE_OFF) {
            newState = STATE_ON;
        } else if (button === BUTTON_PAUSE && state === STATE_ON) {
            newState = STATE_PAUSED;
        } else if (button === BUTTON_RESUME && state === STATE_PAUSED) {
            newState = STATE_ON;
        } else {
            newState = STATE_OFF;
        }

        setState(newState);

        if (newState === STATE_ON) {
            startTimer();
        }
        else if (newState === STATE_PAUSED) {
            pauseTimer();
        } else {
            stopTimer();
        }
    }

    const getButtonByStatus = () => {

        if (state === STATE_PAUSED) {
            return BUTTON_RESUME;
        } else if (state === STATE_ON) {
            return BUTTON_PAUSE;
        } else {
            return BUTTON_START;
        }

    }

    function count() {
        if (time <= 0) {
            stopTimer();
            playSound();
            return;
        }

        console.log('counting...');
        setTime(--time);
    }

    function stopTimer() {
        console.log('stoping timer...');
        if (timer) {
            clearInterval(timer);
        }
        setTimer(null);
        setTime(0);
        setState(STATE_OFF);
    }

    function pauseTimer() {
        console.log('pausing timer...');
        if (timer) {
            clearInterval(timer);
        }
        setTimer(null);
        setState(STATE_PAUSED);
    }

    function startTimer() {
        console.log('starting timer...');
        timer = setInterval(count, 1000);
        setTimer(timer);
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    async function playSound() {
        console.log('Loading Sound');
        console.log(props.sound.file);
        const { sound } = await Audio.Sound.createAsync(props.sound.file);
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    return (
        <View style={styles.timer}>
            <View style={styles.display}>
                {state === STATE_ON || state === STATE_PAUSED ? <Text style={styles.timerText}>{time} s</Text> : null}
                {state === STATE_OFF ? <TextInput keyboardType="numeric" onChangeText={setTime} style={styles.input} maxLength={5} placeholder='Enter with time in seconds' /> : null}
            </View>
            <View style={styles.command}>
                <Button disabled={state === STATE_OFF} onPress={() => handleButton(BUTTON_CANCEL)} title={BUTTON_CANCEL} />
                <Button onPress={() => handleButton(getButtonByStatus())} title={getButtonByStatus()} />
            </View>
        </View>
    )
}

export default Timer;