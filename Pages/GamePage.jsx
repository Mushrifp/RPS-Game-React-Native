import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React, { useContext, useRef, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { contextVariable } from "../Context/Context";
import { playAudio } from "../Utils/sound";

const { width, height } = Dimensions.get("window");

const GamePage = () => {
  const navigation = useNavigation();
  const { setUserValue } = useContext(contextVariable);

  const [fontsLoaded] = useFonts({
    LuckiestGuy: require("../assets/fonts/LuckiestGuy-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = (choice) => {
    setUserValue(choice);
    playAudio("click")
    navigation.replace("Result");
  };

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


  return (
    <LinearGradient colors={["black", "black"]} style={styles.container}>
      <Animated.Text
        style={[styles.selectText, { transform: [{ translateY: floatAnim }] }]}
      >
        Select Yours
      </Animated.Text>

      <View style={styles.choicesContainer}>
        <Pressable onPress={() => handlePress("Rock")}>
          <Image
            source={require("../assets/rock.png")}
            style={styles.choiceImg}
          />
        </Pressable>

        <Pressable onPress={() => handlePress("Paper")}>
          <Image
            source={require("../assets/paper.png")}
            style={styles.choiceImg}
          />
        </Pressable>

        <Pressable onPress={() => handlePress("Scissors")}>
          <Image
            source={require("../assets/scissor.png")}
            style={styles.choiceImg}
          />
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

export default GamePage;
