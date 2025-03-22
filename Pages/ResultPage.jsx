import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const ResultPage = () => {
  const navigation = useNavigation();
  const images = [require('../assets/rock.png'),require("../assets/paper.png"),require("../assets/scissor.png")]
  const [index, setIndex] = useState(0);
  const [fontsLoaded] = useFonts({
    LuckiestGuy: require("../assets/fonts/LuckiestGuy-Regular.ttf"),
  });

  useEffect(() => {
    let timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 500);
  
    let stopTimer = setTimeout(() => {
      clearInterval(timer);
    }, 3000);
  
    return () => {
      clearInterval(timer);
      clearTimeout(stopTimer);
    };
  }, []);
  

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handlePress = (choice) => {
    console.log(`User selected: ${choice}`);
    navigation.navigate("Result");
  };

  return (
    <LinearGradient colors={["black", "#505857"]} style={styles.container}>
      <Text style={styles.selectText}>Select Yours</Text>

      <View style={styles.choicesContainer}>
        <Pressable onPress={() => handlePress("Paper")}>
          <Image source={images[index]} style={styles.choiceImg} />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  selectText: {
    fontFamily: "LuckiestGuy",
    color: "white",
    fontSize: width * 0.1,
    marginTop: height * 0.35,
  },
  choicesContainer: {
    position: "absolute",
    bottom: height * 0.0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.1,
    width: "110%",
  },
  choiceImg: {
    width: width * 0.3,
    height: height * 0.24,
    resizeMode: "contain",
  },
});

export default ResultPage;
