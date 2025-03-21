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


const GamePage = () => {
  const [fontsLoaded] = useFonts({
    LuckiestGuy: require("../assets/fonts/LuckiestGuy-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (         
  <LinearGradient colors={["black", "#505857"]} style={styles.container}>
           <Text style={{color:"white"}} >Welcome to the game page </Text>
   </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
})

export default GamePage