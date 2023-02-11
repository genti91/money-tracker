import { View, Text, TouchableHighlight, Image, ImageBackground } from 'react-native';
import styles from './customDrawer.scss';
import { Avatar } from 'react-native-paper';
  
export default function CustomDrawer({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.avatar}>
        <ImageBackground source={require('../../assets/avatar.jpg')} resizeMode="cover" style={styles.image}>

        </ImageBackground>
      </View> */}
      <Avatar.Image size={70} source={require('../../assets/avatar.jpg')} />
      <Text style={styles.username}>Username</Text>

      <View style={styles.routes}>
        <TouchableHighlight onPress={() => {navigation.navigate('Home')}} underlayColor='#212121'>
          <View style={styles.button}>
            <Image source={require('../../assets/chart.png')} style={styles.icon}/>
            <Text style={styles.text}>Home</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {navigation.navigate('Settings')}} underlayColor='#212121'>
          <View style={styles.button}>
            <Image source={require('../../assets/settings.png')} style={styles.icon}/>
            <Text style={styles.text}>Settings</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {navigation.navigate('Settings')}} underlayColor='#212121'>
          <View style={styles.button}>
            <Image source={require('../../assets/help.png')} style={styles.icon}/>
            <Text style={styles.text}>Help</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {navigation.navigate('Settings')}} underlayColor='#212121'>
          <View style={styles.button}>
            <Image source={require('../../assets/sign_out.png')} style={styles.icon}/>
            <Text style={styles.text}>Sign out</Text>
          </View>
        </TouchableHighlight>

      </View>
    </View>
  );
}