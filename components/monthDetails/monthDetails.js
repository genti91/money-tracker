import { useRef } from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import styles from './monthDetails.scss';

export default function MonthDetails ({navigation, route}){

    const flatList = useRef(null);

    return(
        <View style={styles.container}>
            <View style={styles.frame}>

            <View style={styles.date}>               
            <FlatList
              style={styles.list}
              data={data}
              renderItem={({item}) => {
                return (
                <View style={styles.item}>
                    
                    <View style={styles.topCont}>
                        <Text style={styles.date}>Nov 15:</Text>
                        <View style={styles.dateCont}>    
                            <Text style={styles.itemText}>${item.total}</Text>
                        </View>
                    </View>

                    <View style={styles.items}>
                    {item.data.map((item, index) => {
                        return (
                            <View key={index} style={styles.itemCont}>
                                <Text style={styles.itemText}>${item.price}  </Text>
                                <Text style={styles.itemName}>{item.name.charAt(0).toUpperCase() + item.name.substring(1)}</Text>
                                <Text style={styles.itemTime}>{item.date.slice(12, 18)}</Text>

                            </View>
                        )
                    }
                    )}
                    </View>

                </View>
              )}}
              keyExtractor={item => item.date}
              ref={flatList}
            />

            <View style={styles.dateContainer}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((item, index) => {
                    return (
                        <TouchableHighlight key={index} onPress={() => {flatList.current.scrollToIndex({index: index})}}>
                            <View style={styles.circulo}>
                                <Text style={styles.fecha}>{item}</Text>
                            </View>
                        </TouchableHighlight>
                        )
                })}
            </View> 
               

            </View> 


            </View>
        </View>
    )
}







const data = [
    {
        total: 3423,
        data:[{ price: "850", name: "gas", type: "gas", date: "6 24/12/2022 12:50:11"},
                { price: "345", name: "Coca", type: "food", date: "3 21/12/2022 12:34:14"},
                { price: "154", name: "algo", type: "plus", date: "2 20/12/2022 17:54:10"},
                { price: "250", name: "papas", type: "food", date: "6 17/12/2022 16:25:46"},
            ]
    },
    {
        total: 3423,
        data:[{ price: "850", name: "gas", type: "gas", date: "6 24/12/2022 12:50:11"},
                { price: "345", name: "Coca", type: "food", date: "3 21/12/2022 12:34:14"},
                { price: "154", name: "algo", type: "plus", date: "2 20/12/2022 17:54:10"},
                { price: "250", name: "papas", type: "food", date: "6 17/12/2022 16:25:46"},
                { price: "345", name: "Coca", type: "food", date: "3 21/12/2022 12:34:14"},
            ]
    },
    {
        total: 3423,
        data:[{ price: "850", name: "gas", type: "gas", date: "6 24/12/2022 12:50:11"},
                { price: "345", name: "Coca", type: "food", date: "3 21/12/2022 12:34:14"},
                { price: "154", name: "algo", type: "plus", date: "2 20/12/2022 17:54:10"},
                { price: "250", name: "papas", type: "food", date: "6 17/12/2022 16:25:46"},
            ]
    },
    {
        total: 3423,
        data:[{ price: "850", name: "gas", type: "gas", date: "6 24/12/2022 12:50:11"},
                { price: "345", name: "Coca", type: "food", date: "3 21/12/2022 12:34:14"},
                { price: "154", name: "algo", type: "plus", date: "2 20/12/2022 17:54:10"},
                { price: "250", name: "papas", type: "food", date: "6 17/12/2022 16:25:46"},
            ]
    },
    {
        total: 3423,
        data:[{ price: "850", name: "gas", type: "gas", date: "6 24/12/2022 12:50:11"},
                { price: "345", name: "Coca", type: "food", date: "3 21/12/2022 12:34:14"},
                { price: "154", name: "algo", type: "plus", date: "2 20/12/2022 17:54:10"},
                { price: "250", name: "papas", type: "food", date: "6 17/12/2022 16:25:46"},
            ]
    },
    {
        total: 3423,
        data:[{ price: "850", name: "gas", type: "gas", date: "6 24/12/2022 12:50:11"},
                { price: "345", name: "Coca", type: "food", date: "3 21/12/2022 12:34:14"},
                { price: "154", name: "algo", type: "plus", date: "2 20/12/2022 17:54:10"},
                { price: "250", name: "papas", type: "food", date: "6 17/12/2022 16:25:46"},
            ]
    },
    {
        total: 3423,
        data:[{ price: "850", name: "gas", type: "gas", date: "6 24/12/2022 12:50:11"},
                { price: "345", name: "Coca", type: "food", date: "3 21/12/2022 12:34:14"},
                { price: "154", name: "algo", type: "plus", date: "2 20/12/2022 17:54:10"},
                { price: "250", name: "papas", type: "food", date: "6 17/12/2022 16:25:46"},
            ]
    }
]