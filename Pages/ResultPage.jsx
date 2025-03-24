import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { contextVariable } from "../Context/Context";
import { playAudio } from "../Utils/sound";

const { width, height } = Dimensions.get("window");

const ResultPage = () => {
  const navigation = useNavigation();
  const { userValue } = useContext(contextVariable);

  const images = {
    Rock: require("../assets/rock.png"),
    Paper: require("../assets/paper.png"),
    Scissors: require("../assets/scissor.png"),
  };

  const choices = ["Rock", "Paper", "Scissors"];
  const [indexBot, setIndexBot] = useState(0);
  const [result, setResult] = useState("Waiting For Bot to Select...");

  const [fontsLoaded] = useFonts({
    LuckiestGuy: require("../assets/fonts/LuckiestGuy-Regular.ttf"),
  });

   useEffect(()=>{
        if(result === "You Won"){
            playAudio("won")
        }else if(result === "You Lost"){
          playAudio("lost")
        }else if(result === "It's a Draw"){
          playAudio("draw")
        }
   },[result])

  useEffect(() => {
    playAudio("loading")
    let timer = setInterval(() => {
      setIndexBot(Math.floor(Math.random() * 3));
    }, 50);

    let stopTimer = setTimeout(() => {
      clearInterval(timer);
      resultCalculate();
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(stopTimer);
    };
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  const resultCalculate = () => {
    const botChoice = choices[Math.floor(Math.random() * 3)];
    setIndexBot(choices.indexOf(botChoice));

    const outcomes = {
      Rock: { Scissors: "You Won", Paper: "You Lost" },
      Paper: { Rock: "You Won", Scissors: "You Lost" },
      Scissors: { Paper: "You Won", Rock: "You Lost" },
    };

    setResult(outcomes[userValue]?.[botChoice] || "It's a Draw");
  };

  const handleButtonClick = ()=>{
    playAudio("click")
    navigation.replace("Game")
  }

  return ( 
    <LinearGradient colors={["black", "black"]} style={styles.container}>
      <Image
        source={images[choices[indexBot]]}
        style={[styles.choiceImg, styles.topImage]}
      />

      <Text style={styles.selectText}>
          {result} 
       </Text>

      <View style={styles.choicesContainer}>
        <Pressable>
          <Image source={images[userValue]} style={styles.choiceImg} />
        </Pressable>

        {result !== "Waiting For Bot to Select..." && (
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleButtonClick}
          >
            <LinearGradient
              colors={["#FF4E50", "#FC913A", "#F9D423"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.resetButtonText}>Play again</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectText: {
    fontFamily: "LuckiestGuy",
    color: "white",
    fontSize: width * 0.1,
    textAlign: "center",
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -height * 0.05 }],
  },
  choicesContainer: {
    position: "absolute",
    bottom: height * 0.0,
  },
  choiceImg: {
    width: width * 0.5,
    height: height * 0.33,
    resizeMode: "contain",
  },
  topImage: {
    position: "absolute",
    top: height * 0.0,
    transform: [{ rotate: "180deg" }],
  },
  resetButton: {
    position: "absolute",
    bottom: height * 0.03,
    zIndex: 10,
    borderRadius: 30,
    overflow: "hidden",
    alignSelf: "center",
    width: width * 0.7,
  },
  buttonGradient: {
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    width: "100%",
  },
  resetButtonText: {
    fontFamily: "LuckiestGuy",
    fontSize: width * 0.07,
    color: "#fff",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  countText: {
    color: "red",
    fontWeight: "bold",
    fontSize:width * 0.15
  },
  
});

export default ResultPage;
