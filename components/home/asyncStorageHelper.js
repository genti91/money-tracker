import AsyncStorage from '@react-native-async-storage/async-storage';

export default getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('spendings');
      if (jsonValue === null) {
        const jsonData = JSON.stringify(data)
        await AsyncStorage.setItem('spendings', jsonData)
        console.log('data guardada')
        return data
      }
      return JSON.parse(jsonValue);
    } catch(e) {
      console.log(e)
    }
}

const data = [
    { price: "850", name: "gas", type: "gas", date: "6 24/12/2022 12:50:11"},
    { price: "345", name: "Coca", type: "food", date: "3 21/12/2022 12:34:14"},
    { price: "154", name: "algo", type: "plus", date: "2 20/12/2022 17:54:10"},
    { price: "250", name: "papas", type: "food", date: "6 17/12/2022 16:25:46"},
    { price: "250", name: "papas", type: "food", date: "5 16/12/2022 10:22:37"},
    { price: "2000", name: "burgir", type: "food", date: "3 16/11/2022 10:22:37"},
    { price: "10000", name: "burgir", type: "food", date: "3 16/11/2021 10:22:37"},
];