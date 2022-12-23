import { Text, View, TouchableHighlight } from 'react-native';
import styles from './home.scss';
import { useState } from 'react';
import Dialog from '../dialog/dialog';


export default function Home() {
  
    const [visible, setVisible] = useState(false);
    const [showView, setShowView] = useState(visible);
  
    return (
      <View style={styles.container}>
      <View style={styles.frame}>
  
        <Dialog visible={visible} setVisible={setVisible} showView={showView} setShowView={setShowView}/>
  
        <View style={styles.card}>
          <Text style={styles.text} >Money spent today:</Text>
          <TouchableHighlight>
            <View style={styles.boton}>
              <Text style= {{color:'white'}} >view</Text>
            </View>
          </TouchableHighlight>
          <Text style={styles.ammount} >$540</Text>
        </View>
  
        <View style={styles.card2}>
          <Text style={styles.text} >Money spent this week:</Text>
          <TouchableHighlight>
            <View style={styles.boton}>
              <Text style= {{color:'white'}} >view</Text>
            </View>
          </TouchableHighlight>
          <Text style={styles.ammount} >$2450</Text>
        </View>
  
        <View style={styles.card3}>
          <Text style={styles.text} >Money spent this month:</Text>
          <TouchableHighlight>
            <View style={styles.boton}>
              <Text style= {{color:'white'}} >view</Text>
            </View>  
          </TouchableHighlight>
          <Text style={styles.ammount} >$12850</Text>
        </View>
  
        <View style={styles.addcont}> 
          <TouchableHighlight onPress={() => {setVisible(true); setShowView(true)}}>
            <View style={styles.add}>
              <Text style={styles.textadd} >+ Add spending</Text>
            </View>
          </TouchableHighlight>
        </View>
  
      </View>  
      </View>
    );
  }