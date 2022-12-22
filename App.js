import 'react-native-gesture-handler';
import { Text, View, Button,TouchableHighlight, StatusBar } from 'react-native';
import Appstyles from './App.scss';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#000000' barStyle='light-content'/>
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home}  options={
        {headerStyle: {
          backgroundColor: '#1c1c1c',
        },
        headerTintColor: '#fff',
        headerShadowVisible: false,
        headerTitleAlign: 'right',
      }
      }/>
      <Drawer.Screen name="MiWea" component={MiWea} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  
  return (
    <View style={Appstyles.container}>
    <View style={Appstyles.frame}>

    <View style={Appstyles.card}>
      <Text style= {{color:'white'}}>amongus</Text>
      <TouchableHighlight>
        <View style={Appstyles.boton}>
          <Text style= {{color:'white'}} >view</Text>
        </View>
      </TouchableHighlight>
    </View>

    </View>
    </View>

  );
}

function MiWea (){
  return(
    <View>
      <Text>hola</Text>
    </View>
  )
}