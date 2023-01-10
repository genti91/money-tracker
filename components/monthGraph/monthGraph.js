import {View, Text} from 'react-native';
import styles from './monthGraph.scss';
import { PieChart } from 'react-native-svg-charts'

export default function MonthGraph ({navigation, route}){

    const data = [50, 50, 40, 95, 85, 91]

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
            },
            key: `pie-${index}`,
    }))


    return(
        <View style={styles.container}>
            <View style={styles.frame}>
                
                <View style={styles.graphContainer}>
                <View style={{width: '50%'}}>
                    <PieChart padAngle={0} innerRadius='60%' style={{ height: 200 }} data={pieData} />
                </View>
                <Text style={styles.total}>$14250</Text>
                </View>
                
                <View style={{flexDirection: 'row', width: 325}}>
                    <View style={styles.items}>                 
                        <View style={styles.linita}>
                            <Text style={styles.month}>Cocktober:</Text>
                        </View>
                        
                        <View style={styles.monthitems} >
                            <Text style={styles.sussyitems} >Transport</Text>
                            <Text style={styles.sussyitems} >Entretainment</Text>
                            <Text style={styles.sussyitems} >Food</Text>
                            <Text style={styles.sussyitems} >Health</Text>
                            <Text style={styles.sussyitems} >House</Text>
                            <Text style={styles.sussyitems} >sus</Text>
                            <Text style={styles.sussyitems} >sus</Text>
                        </View>

                        <View style={styles.monthammont} >
                            <Text style={{...styles.sussyitems, color: randomColor()}}>$43240</Text>
                            <Text style={{...styles.sussyitems, color: randomColor()}}>$1320</Text>
                            <Text style={{...styles.sussyitems, color: randomColor()}}>$950</Text>
                            <Text style={{...styles.sussyitems, color: randomColor()}}>$40</Text>
                            <Text style={{...styles.sussyitems, color: randomColor()}}>$420</Text>
                            <Text style={{...styles.sussyitems, color: randomColor()}}>$4356</Text>
                            <Text style={{...styles.sussyitems, color: randomColor()}}>$43240</Text>
                        </View>


                    </View>

                    <View style={styles.monthTarget}>
                        <View style={styles.linita}>
                            <Text style={styles.target}>Monthly target:</Text>
                        </View>
                        <Text style={styles.targetprice}>$143240</Text>
                        <View>


                        </View>
                        <View style={styles.bottle}>
                            <View style={{...styles.bottlefilling, height: '20%'}}>
                
                        </View>
                        </View>
                        
                    </View>
                </View>

            </View>
        </View>
    )
}