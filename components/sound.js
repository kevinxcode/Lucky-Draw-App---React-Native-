import { Audio } from 'expo-av';



// sound
const soundObject = new Audio.Sound();

const playSound = async () => {
    try {
        await soundObject.loadAsync(require('../assets/song.mp3'));
        await soundObject.playAsync();
    } catch (error) {
        console.error('Error playing sound:', error);
    }
};

const stopSound = async () => {
    try {
        await soundObject.loadAsync(require('../assets/song.mp3'));
        await soundObject.pauseAsync();
    } catch (error) {
        console.error('Error stopping sound:', error);
    }
};
// end sound