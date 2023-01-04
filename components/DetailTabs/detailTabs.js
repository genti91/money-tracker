import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image } from 'react-native';
import Home from '../home/home';
import MonthDetails from '../monthDetails/monthDetails';
import MonthGraph from '../monthGraph/monthGraph';

const Tab = createBottomTabNavigator();

export default function DetailTabs() {


  return (
    <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {

            return(
                <View style={focused ? styles.container: ''}>
                    {route.name === 'Sheet' ? 
                    <Image source={require('../../assets/sheet.png')} style={{width: 20, height: 20}}/> : 
                    <Image source={require('../../assets/chart.png')} style={{width: 30, height: 30}}/>
                    }
                </View>
            )
        },
        tabBarStyle: {
            backgroundColor: '#000000',
            height: 59,
            borderTopColor: 'transparent',
            paddingHorizontal: 40,
            
        },
        tabBarShowLabel: false,
    })}
    >
        <Tab.Screen name="Sheet" component={MonthDetails} />
        <Tab.Screen name="Graph" component={MonthGraph} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {

        width: 54,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626',
        overflow: 'hidden',
        padding: 0,
        alignContent: 'center',
        flexWrap: 'nowrap',
        gap: 10,
        borderRadius: 27,
    },
});