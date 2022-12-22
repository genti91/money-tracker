import 'react-native-gesture-handler';
import { Text, View, TouchableHighlight, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Appstyles from './App.scss';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './components/drawer/customDrawer';
import { Provider as PaperProvider } from 'react-native-paper';
import * as React from 'react';
import { Button, Dialog, Portal, IconButton, Colors } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import CustomHeader from './components/header/customHeader';
import { getHeaderTitle } from '@react-navigation/elements';

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <PaperProvider>
    <NavigationContainer>
      <StatusBar backgroundColor='#000000' barStyle='light-content'/>
    <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={
      {drawerStyle: { backgroundColor: '#212121', width: 195 },
      headerStyle: { height:65, backgroundColor: '#1c1c1c' },
      header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return <CustomHeader title={title} style={options.headerStyle} navigation={navigation}/>;
        }
      }
    }>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="MiWea" component={MiWea} />
    </Drawer.Navigator>
    </NavigationContainer>
    </PaperProvider>
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

  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  return(
    <View style={Appstyles.container}>
    <View style={Appstyles.frame}>
    <Edit/>
      <Text>hola</Text>
      <Button onPress={() => setVisible(true)}>View</Button>
      <Portal>
      <Dialog style={Appstyles.dialog} visible={visible} onDismiss={hideDialog}>
          <TouchableWithoutFeedback onPress={hideDialog}>
            <View style={Appstyles.menu}>
              <MaterialCommunityIcons name="!" color={'#fff'} size={30}/>
            </View>
          </TouchableWithoutFeedback>
          <Button onPress={() => console.log('Ok')}>Ok</Button>
        
      </Dialog>
    </Portal>
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

