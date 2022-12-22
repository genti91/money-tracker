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
          height: 80
        },
        headerTintColor: '#fff',
        headerShadowVisible: false,
        headerTitleAlign: 'right',
        headerTitleStyle:{
          
          fontSize: 20,
          marginLeft: 200,
        }
        
      }
      }/>
      <Drawer.Screen name="MiWea" component={MiWea} options={
        {headerStyle: {
          backgroundColor: '#1c1c1c',
        },
        headerTintColor: '#fff',
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        
      }
      }/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  
  return (
    <View style={Appstyles.container}>
    <View style={Appstyles.frame}>






<View style={Appstyles.card}>
<Text style={Appstyles.text} >Money spent today:</Text>
      <TouchableHighlight>
        <View style={Appstyles.boton}>
          <Text style= {{color:'white'}} >view</Text>
        </View>
      
      </TouchableHighlight>
      <Text style={Appstyles.ammount} >$540</Text>
    </View>


    <View style={Appstyles.card2}>
<Text style={Appstyles.text} >Money spent this week:</Text>
      <TouchableHighlight>
        <View style={Appstyles.boton}>

          <Text style= {{color:'white'}} >view</Text>
          
          </View>
      </TouchableHighlight>
      <Text style={Appstyles.ammount} >$2450</Text>
    </View>

    <View style={Appstyles.card3}>
<Text style={Appstyles.text} >Money spent this month:</Text>
      <TouchableHighlight>
        <View style={Appstyles.boton}>

          <Text style= {{color:'white'}} >view</Text>
          
          </View>
          
      </TouchableHighlight>
      <Text style={Appstyles.ammount} >$12850</Text>
    </View>


<View style={Appstyles.addcont}> 
    <TouchableHighlight>
        <View style={Appstyles.add}>

          <Text style={Appstyles.textadd} >+ Add spending</Text>
          
          </View>
          </TouchableHighlight>
     
    </View>





</View>

    
    </View>




  );
}

function MiWea (){
  return(
    <View style={Appstyles.container}>
    <View style={Appstyles.frame}>
    <Edit/>
      <Text>hola</Text>
    </View>
    </View>
  )
}

function Edit (){
  return(
    <View>
      <Text style={Appstyles.text}>hola</Text>
    </View>
    
  )
}

