import {Audio} from "expo-av"

const soundObject = {
    click:require("../assets/audio/buttonClick.mp3"),
    loading:require("../assets/audio/loadingBot.mp3"),
    won:require("../assets/audio/won.mp3"),
    draw:require("../assets/audio/draw.mp3"),
    lost:require("../assets/audio/failed.mp3"),
}

export const playAudio = async (soundKey)=>{
    try {
        const { sound } = await Audio.Sound.createAsync(soundObject[soundKey]);
        await sound.playAsync();
    } catch (error) {
        console.log(error)
    }
}