import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home/home';
import MonthDetails from '../monthDetails/monthDetails';
import MonthGraph from '../monthGraph/monthGraph';

const Tab = createBottomTabNavigator();

export default function DetailTabs() {



  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
    }}
    >
        <Tab.Screen name="Sheet" component={MonthDetails} />
        <Tab.Screen name="Graph" component={MonthGraph} />
    </Tab.Navigator>
  );
}