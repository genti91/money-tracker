import { View, Button, Text, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import styles from './customHeader.scss';

export default function CustomHeader({title, style, navigation}) {
    return (
        <View style={style}>
            <View style={styles.headerContainer}>
                <TouchableHighlight
                    underlayColor='#1c1c1c'
                    onPress={() => {navigation.toggleDrawer()}}>
                        {/* <MaterialCommunityIcons name="menu" color={'#fff'} size={35}/> */}

                        <View style={styles.burger}>
                            <View style={styles.barr}/>
                            <View style={styles.space}/>
                            <View style={styles.barr}/>
                            <View style={styles.space}/>
                            <View style={styles.barr}/>
                        </View>
                </TouchableHighlight>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}