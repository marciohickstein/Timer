const SOUND_1 = require('../assets/sounds/bop.mp3');
const SOUND_2 = require('../assets/sounds/bubblesloud.mp3');
const SOUND_3 = require('../assets/sounds/dripdrop.mp3');
const SOUND_4 = require('../assets/sounds/eureka.mp3');

class SoundList {
    constructor() {
        this.sounds = [
            { id: 1, title: 'Sound 1: Bop', file: SOUND_1 },
            { id: 2, title: 'Sound 2: BubblesLoud', file: SOUND_2 },
            { id: 3, title: 'Sound 3: DripDrop', file: SOUND_3 },
            { id: 4, title: 'Sound 4: Eureka', file: SOUND_4 },
        ]
    }

    getAllSounds() {
        return this.sounds;
    }

    getSound(index) {
        
        if (index < 0 || index >= this.sounds.lenght) {
            return this.sounds[0];
        }

        return this.sounds[index];
    }
}

export default SoundList;