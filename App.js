import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import { StatusBar } from 'react-native';
import ResultPage from './Pages/ResultPage'
import Context from './Context/Context';



const Stack = createStackNavigator()

export default function App() {
  return (
    <>
    <Context>
       <NavigationContainer>
       <StatusBar backgroundColor={"black"} />
           <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>               
           
              <Stack.Screen name='Home'  component={HomePage} />
              <Stack.Screen name='Game' component={GamePage} />
              <Stack.Screen name='Result' component={ResultPage} />
           
           </Stack.Navigator>
       </NavigationContainer>
    </Context>
    </>
  );
}



