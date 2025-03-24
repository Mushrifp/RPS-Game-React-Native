import { useEffect } from "react";
import { Alert, BackHandler } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./Pages/HomePage";
import GamePage from "./Pages/GamePage";
import ResultPage from "./Pages/ResultPage";
import Context from "./Context/Context";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Hold on!", 
        "Do you really want to exit?", 
        [
          { text: "Cancel", onPress: () => null, style: "cancel" },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); 
  }, []);

  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Game" component={GamePage} />
          <Stack.Screen name="Result" component={ResultPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}
