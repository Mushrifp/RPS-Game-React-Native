import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const GamePage = () => {
  const navigation = useNavigation()
  const [fontsLoaded] = useFonts({
    LuckiestGuy: require("../assets/fonts/LuckiestGuy-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handlePress = (choice) => {
    console.log(`User selected: ${choice}`);
    navigation.navigate("Result")
  };

  return (
    <LinearGradient colors={["black", "#505857"]} style={styles.container}>
      <Text style={styles.selectText}>Select Yours</Text>

      <View style={styles.choicesContainer}>
        <Pressable onPress={() => handlePress("Rock")}>
          <Image source={require("../assets/rock.png")} style={styles.choiceImg} />
        </Pressable>

        <Pressable onPress={() => handlePress("Paper")}>
          <Image source={require("../assets/paper.png")} style={styles.choiceImg} />
        </Pressable>

        <Pressable onPress={() => handlePress("Scissors")}>
          <Image source={require("../assets/scissor.png")} style={styles.choiceImg} />
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
    bottom: height * 0.00,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.10,
    width: "110%", 
  },
  choiceImg: {
    width: width * 0.30, 
    height: height * 0.24, 
    resizeMode: "contain",
  },
});
export default GamePage;
