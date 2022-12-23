import { Text, View, TouchableHighlight, StatusBar, TouchableWithoutFeedback, Image, TextInput } from 'react-native';
import styles from './dialog.scss';
import * as React from 'react';
import { Button, Portal, IconButton, Colors } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

export default function Dialog ({visible, showView, setVisible, setShowView}){

    const hideDialog = () => setVisible(false);
    const viewAnimation = React.useRef(null);
  
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
            <TextInput style={styles.input} placeholder="Price" placeholderTextColor="#fff" keyboardType="numeric" />
            </View>

            <View style={styles.itemname}>
            <TextInput style={styles.input} placeholder=" What did you buy?" placeholderTextColor="#fff" />
</View>

<View style={styles.iconContainer}>

  
<View style={styles.foodicon}>

<Image source={require('../../assets/comida.png')} style={styles.icon}/>
</View>

<View style={styles.gasicon}>

<Image source={require('../../assets/nafta.png')} style={styles.icon2}/>
</View>

<View style={styles._icon}>


</View>

<View style={styles.plusicon}>


</View>


</View>

            
          </View>
          
          <View style={{...styles.botCont}}>

            <TouchableHighlight onPress={hideDialog} style={styles.touchable}>
              <View style={styles.cancelar}>
                <Image source={require('../../assets/cancelar.png')} style={styles.cancelarImg}/>
              </View>
            </TouchableHighlight>

          <TouchableHighlight style={styles.touchable}>
            <View style={styles.aceptar}>
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