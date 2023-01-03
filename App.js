import 'react-native-gesture-handler';
import { View, StatusBar } from 'react-native';
import Appstyles from './App.scss';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './components/drawer/customDrawer';
import { Provider as PaperProvider } from 'react-native-paper';
import CustomHeader from './components/header/customHeader';
import { getHeaderTitle } from '@react-navigation/elements';
import Settings from './components/settings/settings';
import HomeStack from './components/HomeStack/HomeStack';
import { useState } from 'react';

const Drawer = createDrawerNavigator();

export default function App() {

  const [visible, setVisible] = useState(true);

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#000000' barStyle='light-content'/>
        <Drawer.Navigator initialRouteName='Mi Wea' drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={
          {drawerStyle: { backgroundColor: '#212121', width: 195 },
          headerStyle: { height:65, backgroundColor: '#1c1c1c' },
          header: ({ navigation, route, options }) => {
              const title = getHeaderTitle(options, route.name);
              return <CustomHeader title={title} style={options.headerStyle} navigation={navigation} visible={visible}/>;
            }
          }
        }>
          <Drawer.Screen name="Mi Wea" component={HomeStack} initialParams={{ setVisible: setVisible }}/>
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
