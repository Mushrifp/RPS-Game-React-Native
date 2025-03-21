import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("window");

const HomePage = () => {
  const [fontsLoaded] = useFonts({
    LuckiestGuy: require("../assets/fonts/LuckiestGuy-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <LinearGradient colors={["black", "#505857"]} style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={[styles.rpsText, { color: "white" }]}>Rock</Text>
        <Text style={[styles.rpsText, { color: "white" }]}>Paper</Text>
        <Text style={[styles.rpsText, { color: "white" }]}>Scissor</Text>
      </View>

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton}>
        <LinearGradient
          colors={["black", "black"]}
          style={styles.buttonGradient}
        >
          <Text style={styles.startButtonText}>START BOP!</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    position: "absolute",
    top: height * 0.25,
  },
  rpsText: {
    fontSize: width * 0.2,
    fontFamily: "LuckiestGuy",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  startButton: {
    position: "absolute",
    bottom: height * 0.12,
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
