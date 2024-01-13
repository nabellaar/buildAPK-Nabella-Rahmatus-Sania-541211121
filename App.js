import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import Portofolio from './components/Portofolio'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Register" component={RegisterScreen} />
       <Stack.Screen name="Portofolio" component={Portofolio} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}