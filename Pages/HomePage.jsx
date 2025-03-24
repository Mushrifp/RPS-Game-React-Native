import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { playAudio } from "../Utils/sound";

const { width, height } = Dimensions.get("window");

const HomePage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    LuckiestGuy: require("../assets/fonts/LuckiestGuy-Regular.ttf"),
  });

  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 10,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleButtonClick = ()=>{
    playAudio("click")
    navigation.replace("Game")
  }

  return fontsLoaded ? (
    <LinearGradient
      colors={["black", "black", "black", "black", "grey"]}
      style={styles.container}
    >
      {/* Floating Title */}
      <Animated.View
        style={[
          styles.titleContainer,
          { transform: [{ translateY: floatAnim }] },
        ]}
      >
        <Text style={[styles.rpsText, { transform: [{ rotate: "-10deg" }] }]}>
          Rock
        </Text>
        <Text style={[styles.rpsText, { transform: [{ rotate: "3deg" }] }]}>
          Paper
        </Text>
        <Text style={[styles.rpsText, { transform: [{ rotate: "-10deg" }] }]}>
          Scissor
        </Text>
      </Animated.View>

      {/* Start Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={handleButtonClick}
      >
        <LinearGradient
          colors={["#FF4E50", "#FC913A", "#F9D423"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.buttonGradient}
        >
          <Text style={styles.startButtonText}>START BOP!</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  ) : (
    <View style={styles.loadingContainer}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  titleContainer: {
    alignItems: "center",
    position: "absolute",
    top: height * 0.3,
  },
  rpsText: {
    fontSize: width * 0.2,
    fontFamily: "LuckiestGuy",
    textShadowColor: "#000",
    color: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  startButton: {
    position: "absolute",
    bottom: height * 0.05,
    borderRadius: 30,
    overflow: "hidden",
    transform: [{ scale: 1.1 }],
  },
  buttonGradient: {
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.2,
    borderRadius: 30,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  startButtonText: {
    fontFamily: "LuckiestGuy",
    fontSize: width * 0.07,
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default HomePage;
