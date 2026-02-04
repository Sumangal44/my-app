import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen.js';
import OnboardingScreen from '../screens/OnboardingScreen'

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="onboarding">
          <Stack.Screen
            name="onboarding"
            options={{ headerShown: false }}
            component={OnboardingScreen}
          />

          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
    
}
