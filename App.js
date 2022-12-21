import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Appstyles from './App.scss';

export default function App() {
  console.log("styles: ",Appstyles);
  return (
    <View style={Appstyles.container}>
      <Text>Open up App.js to start workin on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}