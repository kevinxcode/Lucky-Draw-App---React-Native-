import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Luckydrawscreen from './components/Luckydrawscreen';
import Resultscreen from './components/Resultscreen';
import Dashboardscreen from './components/Dashboardscreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.rootScreen}>
      <Stack.Navigator  
      initialRouteName="DASHBOARD">

        <Stack.Screen name="DASHBOARD" component={Dashboardscreen} 
         options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
         />
        
        <Stack.Screen name="LUCKYDRAW" component={Luckydrawscreen} 
         options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
         />

          <Stack.Screen name="RESULT" component={Resultscreen} 
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

