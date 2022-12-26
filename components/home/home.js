import { Text, View, TouchableHighlight } from 'react-native';
import styles from './home.scss';
import { useEffect, useState } from 'react';
import Dialog from '../dialog/dialog';
import ViewDialog from '../viewDialog/viewDialog';
import { Button } from 'react-native-paper';
import getData from './asyncStorageHelper';


export default function Home() {
  
    const [visible, setVisible] = useState(false);
    const [visibleView, setVisibleView] = useState(false);
     const [money, setMoney] = useState(null)
    //[
    //   { price: "850", name: "gas", type: "gas", date: "6 24/12/2022 12:50:11"},
    //   { price: "345", name: "Coca", type: "food", date: "3 21/12/2022 12:34:14"},
    //   { price: "154", name: "algo", type: "plus", date: "2 20/12/2022 17:54:10"},
    //   { price: "250", name: "papas", type: "food", date: "6 17/12/2022 16:25:46"},
    //   { price: "250", name: "papas", type: "food", date: "5 16/12/2022 10:22:37"},
    //   { price: "2000", name: "burgir", type: "food", date: "3 16/11/2022 10:22:37"},
    //   { price: "10000", name: "burgir", type: "food", date: "3 16/11/2021 10:22:37"},
    // ])

    const loadMoney = async () => {
      let data = await getData()
      setMoney(data)
    }
    useEffect(() => {
      loadMoney()
    },[])

    const[today, setToday] = useState({total:0, data:[]})
    const[week, setWeek] = useState({total:0, data:[]})
    const[month, setMonth] = useState({total:0, data:[]})
    const[viewData, setViewData] = useState({})

    useEffect(() => {
      if (money === null) return
      let year = new Date().getFullYear()
      let monthToday = new Date().getMonth() + 1
      let dateToday = new Date().getDate()
      let dayToday = new Date().getDay()
      if (dayToday == 0) {dayToday = 7}
      dateToday -= dayToday
      let thisYear = money.filter((e) =>  e.date.slice(8,12) == year)
      let monthData = thisYear.filter((e) =>  e.date.slice(5,7) == monthToday)
      let weekData = monthData.filter((e) =>  e.date.slice(2,4) > dateToday)
      let todayData = monthData.filter((e) =>  e.date.slice(2,4) == new Date().getDate())
      let todayTotal = 0
      todayData.forEach((e) => {todayTotal += Number(e.price)})
      setToday({total: todayTotal, data: todayData})
      let weekTotal = 0
      weekData.forEach((e) => {weekTotal += Number(e.price)})
      setWeek({total: weekTotal, data: weekData})
      let monthTotal = 0
      monthData.forEach((e) => {monthTotal += Number(e.price)})
      setMonth({total: monthTotal, data: monthData})
    },[money])
  
    return (
      <View style={styles.container}>
      <View style={styles.frame}>
  
        <Dialog visible={visible} setVisible={setVisible} money={money} setMoney={setMoney}/>
        <ViewDialog visibleView={visibleView} setVisibleView={setVisibleView} data={viewData}/>
        
        <View style={styles.card}>
          <Text style={styles.text} >Money spent today:</Text>
          <View style={styles.cardBotonContainer} >
            <Text style={styles.ammount} >${today.total}</Text>
            <TouchableHighlight style={styles.boton} onPress={() => {setViewData(today); setVisibleView(true)}}>
                <Text style= {{color:'white'}} >view</Text>
            </TouchableHighlight>
          </View>
        </View>
  
        <View style={styles.card2}>
          <Text style={styles.text} >Money spent this week:</Text>
          <View style={styles.cardBotonContainer}>
            <Text style={styles.ammount} >${week.total}</Text>
            <TouchableHighlight style={styles.boton} onPress={() => {setViewData(week); setVisibleView(true)}}>
                <Text style= {{color:'white'}} >view</Text>
            </TouchableHighlight>
          </View>
        </View>
  
        <View style={styles.card3}>
          <Text style={styles.text} >Money spent this month:</Text>
          <View style={styles.cardBotonContainer}>
            <Text style={styles.ammount} >${month.total}</Text>
            <TouchableHighlight style={styles.boton} onPress={() => {setViewData(month); setVisibleView(true)}}>
                <Text style= {{color:'white'}} >view</Text>
            </TouchableHighlight>
          </View>  
        </View>
  
        <View style={styles.addcont}> 
          <TouchableHighlight onPress={() => {setVisible(true)}}>
            <View style={styles.add}>
              <Text style={styles.textadd} >+ Add spending</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>  
      </View>
    );
  }