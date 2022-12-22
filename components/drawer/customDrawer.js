import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Button, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './customDrawer.scss';
  
export default function CustomDrawer({ navigation }) {
  return (
      <View >
    <Button
      title="Home"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('Home');
      }}
    />
    <Button
      title="MiWea"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('MiWea');
      }}
    />
    </View>
  );
}