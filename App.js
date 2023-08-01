import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from './components/Homescreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.rootScreen}>
      <Stack.Navigator  
      initialRouteName="HOME">
        
        <Stack.Screen name="HOME" component={Homescreen} 
         options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
         />
       
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

