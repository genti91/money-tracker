import { View, Button, Text, TouchableHighlight } from 'react-native';
import styles from './stackHeader.scss';
import { useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';


export default function CustomStackHeader({title, style, navigation, setVisible}) {

    const route = useRoute();
    console.log(route.name);
    if (route.name === 'Home') return null;
    const [render, setRender] = useState(true);



    return (
        <>{!render ? null :
        <View style={style}>
            <View style={styles.headerContainer}>
                <TouchableHighlight
                    underlayColor='#1c1c1c'
                    onPress={() => {setRender(false); navigation.navigate('Home')}}>
                        <MaterialCommunityIcons name="arrow-left" size={35} color="white" />

                        {/* <View style={styles.burger}>
                            <View style={styles.barr}/>
                            <View style={styles.space}/>
                            <View style={styles.barr}/>
                            <View style={styles.space}/>
                            <View style={styles.barr}/>
                        </View> */}
                </TouchableHighlight>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
        }</>
    );
}