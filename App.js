import { StatusBar } from 'expo-status-bar';
import { Text, View, Button,TouchableHighlight } from 'react-native';
import Appstyles from './App.scss';

export default function App() {
  console.log("styles: ",Appstyles);
  return (
    <View style={Appstyles.frame}>

<View style={Appstyles.card}>
<Text style={Appstyles.text} >Money spent today:</Text>
      <TouchableHighlight>
        <View style={Appstyles.boton}>

          <Text style= {{color:'white'}} >view</Text>
          
          </View>
      </TouchableHighlight>
    </View>

    <View style={Appstyles.card2}>
<Text style={Appstyles.text} >Money spent this week:</Text>
      <TouchableHighlight>
        <View style={Appstyles.boton}>

          <Text style= {{color:'white'}} >view</Text>
          
          </View>
      </TouchableHighlight>
    </View>

    <View style={Appstyles.card3}>
<Text style={Appstyles.text} >Money spent this month:</Text>
      <TouchableHighlight>
        <View style={Appstyles.boton}>

          <Text style= {{color:'white'}} >view</Text>
          
          </View>
      </TouchableHighlight>
    </View>




      

      
    </View>



  );
}