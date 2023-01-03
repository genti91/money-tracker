import { createStackNavigator } from '@react-navigation/stack';
import Home from '../home/home';
import MonthDetails from '../monthDetails/monthDetails';
import CustomStackHeader from '../stackHeader/stackHeader';

const Stack = createStackNavigator();

export default function HomeStack({route}) {

  let setVisible = route.params.setVisible;

  return (
    <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                backgroundColor: `rgba(0, 0, 0, ${progress})`,
              },
            };
          },
          headerStyle: { height:65, backgroundColor: '#1c1c1c' },
          header: ({ navigation, route, options }) => {
              return <CustomStackHeader title={'Details'} style={options.headerStyle} navigation={navigation} setVisible={setVisible}/>;
            }
        }
    }>
        <Stack.Screen name="Home" component={Home} initialParams={{ setVisible: setVisible }} />
        <Stack.Screen name="Detail" component={MonthDetails} />
    </Stack.Navigator>
  );
}