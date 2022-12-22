import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Appstyles from './App.scss';

export default function App() {
  console.log("styles: ",Appstyles);
  return (
    <View style={Appstyles.frame}>
      <Text style={Appstyles.text}>sussy</Text>
      <StatusBar style="auto" />
    </View>
  );
}