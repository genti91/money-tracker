import { Text, View, TouchableHighlight, StatusBar, TouchableWithoutFeedback, Image, TextInput } from 'react-native';
import styles from './viewDialog.scss';
import * as React from 'react';
import { Button, Portal, IconButton, Colors } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

export default function ViewDialog ({visibleView, setVisibleView}){

    const hideDialog = () => setVisibleView(false);
    const [showViewView, setShowViewView] = React.useState(visibleView);
    const viewAnimation = React.useRef(null);
  
    React.useEffect(() => {
      const Animation = async () => {
        if (visibleView) {
          setShowViewView(true);
          if (viewAnimation.current)
            await viewAnimation.current.fadeIn(200);
          } else {
            if (viewAnimation.current)
              await viewAnimation.current.fadeOut(200);
              setShowViewView(false)
          }
        }
        Animation();
  }, [visibleView, viewAnimation]);
  
  return(

      <Portal>
        <Animatable.View ref={viewAnimation}>

        {showViewView && (
        <View style={styles.dialogContainer}>
          <View style={styles.dialog}>
          <Text style={styles.title}>Money spent today:</Text>
          <Text style={styles.money}>$540</Text>
          <TouchableHighlight onPress={hideDialog} style={styles.touchable}>
              <View style={styles.cancelar}>
                <Image source={require('../../assets/cancelar.png')} style={styles.cancelarImg}/>
              </View>
          </TouchableHighlight>

            
          </View>
          
          
        </View>
        )}

        </Animatable.View>
      </Portal>
  )
}