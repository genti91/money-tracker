import { Text, View, TouchableHighlight, StatusBar, TouchableWithoutFeedback, Image, TextInput } from 'react-native';
import styles from './dialog.scss';
import * as React from 'react';
import { Button, Portal, IconButton, Colors } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

export default function Dialog ({visible, setVisible, money, setMoney}){

  const hideDialog = () => {setVisible(false); setBorder({}); clearStates()}


  const [showView, setShowView] = React.useState(visible);
  const viewAnimation = React.useRef(null);
  const [border, setBorder] = React.useState({});
  const [spending, setSpending] = React.useState({
    price: "",
    name: "",
    type: "",
    date: "",
  });
  
  const clearStates = () => {setSpending({ price: "", name: "", type: "", date: ""}); setError({price: false, empty: false,})}

  React.useEffect(() => {
    const Animation = async () => {
      if (visible) {
        setShowView(true);
        if (viewAnimation.current)
          await viewAnimation.current.fadeIn(200);
        } else {
          if (viewAnimation.current)
            await viewAnimation.current.fadeOut(200);
            setShowView(false)
        }
      }
      Animation();
  }, [visible, viewAnimation]);

  const getDate = () => {
    let date = new Date().getDate(); let month = new Date().getMonth() + 1; let year = new Date().getFullYear()
    let hours = new Date().getHours(); let min = new Date().getMinutes(); let sec = new Date().getSeconds()
    let day = new Date().getDay()
    if (day == 0) {day = 7}
    if (month < 10) {month = `0${month}`}
    if (date < 10) {date = `0${date}`}
    return day+' '+date+'/'+month+'/'+year+' '+hours+':'+min+':'+sec
  }

  React.useEffect(() => {
    //console.log(getDate());
  },[spending, error])


  const [error, setError] = React.useState({
    price: false,
    empty: false,
  });
  const checkPrice = (text) => {
    if(isNaN(text)){
      setError({...error, price: true})
    }else{
      setError({...error, price: false})
    }
  }
  const submitSpending = async () => {
    if (error.price) return;
    if (!spending.price || !spending.name || !spending.type) {
      setError({...error, empty: true});
      return;
    }
    let date = getDate()
    console.log(date)
    setSpending({...spending, date: date})
    console.log('spening', spending)

    hideDialog()
  }
  
  return(

      <Portal>
        <Animatable.View ref={viewAnimation}>

        {showView && (
        <View style={styles.dialogContainer}>

          <View style={styles.dialog}>
            <View style={styles.textContainer}>
              <Text  style={styles.new_spending}> New spending</Text>
            </View>
            <View style={styles.price}>
            <TextInput style={styles.input}  onChangeText={(text) => {setSpending({...spending, price: text}); checkPrice(text)}} placeholder="Price" value={spending.price} placeholderTextColor="#fff" keyboardType="numeric" />
            </View>
            {error.price && (<Text style={styles.priceError} >Price must be a number</Text>)}

            <View style={styles.itemname}>
            <TextInput style={styles.input} onChangeText={(text) => {setSpending({...spending, name: text})}} placeholder="What did you buy?" value={spending.name} placeholderTextColor="#fff" />
</View>

<View style={styles.iconContainer}>

<TouchableHighlight onPress={() => {setBorder({food: 2}); setSpending({...spending, type: 'food'})}} underlayColor='#1a1a1a'>
<View style={{...styles.foodicon, borderWidth: border.food}}>
<Image source={require('../../assets/comida.png')} style={styles.icon}/>
</View>
</TouchableHighlight>

<TouchableHighlight onPress={() => {setBorder({gas: 2}); setSpending({...spending, type: 'gas'})}} underlayColor='#1a1a1a'>
<View style={{...styles.gasicon, borderWidth: border.gas}}>
<Image source={require('../../assets/nafta.png')} style={styles.icon2}/>
</View>
</TouchableHighlight>

<TouchableHighlight onPress={() => {setBorder({_icon: 2}); setSpending({...spending, type: '_icon'})}} underlayColor='#1a1a1a'>
<View style={{...styles._icon, borderWidth: border._icon}}>

</View>
</TouchableHighlight>

<TouchableHighlight onPress={() => {setBorder({plus: 2}); setSpending({...spending, type: 'plus'})}} underlayColor='#1a1a1a'>
<View style={{...styles.plusicon, borderWidth: border.plus}}>


</View>
</TouchableHighlight>

</View>

            
          </View>
          
          {error.empty && (<Text style={styles.emptyError} >All fields are required</Text>)}
          <View style={{...styles.botCont}}>


          <TouchableHighlight onPress={hideDialog} style={styles.touchable}>
            <View style={styles.cancelar}>
              <Image source={require('../../assets/cancelar.png')} style={styles.cancelarImg}/>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.aceptar} onPress={submitSpending} underlayColor='#363636'>
            <View >
              <Image source={require('../../assets/guardar.png')} style={styles.guardarImg}/>
            </View>
          </TouchableHighlight>
          
          </View>

        </View>
        )}

        </Animatable.View>
      </Portal>
  )
}