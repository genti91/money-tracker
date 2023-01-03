import { View, Text } from "react-native";
import styles from './monthDetails.scss';

export default function MonthDetails ({navigation, route}){
    return(
        <View style={styles.container}>
            <View style={styles.frame}>
                <Text>MonthDetails</Text>
            </View>
        </View>
    )
}