import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';


const Stack = createStackNavigator()

export default function App() {
  return (
    <>
       <NavigationContainer>
           <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>               
           
              <Stack.Screen name='Home'  component={HomePage} />
              <Stack.Screen name='Game' component={GamePage} />
           
           </Stack.Navigator>
       </NavigationContainer>
    </>
  );
}



